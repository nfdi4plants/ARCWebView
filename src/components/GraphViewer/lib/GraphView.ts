import Sigma from "sigma";
import Graph from "graphology";
import dagre from "@dagrejs/dagre";
import { JsonController, ROCrate } from '@nfdi4plants/arctrl';
import { type Option } from '@fable-org/fable-library-js/Option.js';

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;
type LDContext = Parameters<typeof ROCrate.LDLabProcess.validate>[1];
type LDNode = Parameters<typeof ROCrate.LDLabProcess.validate>[0];

type Node = {
  id: string;
  label: string;
  type: string;
  metadata: { [key: string]: string };
  x?: number;
  y?: number;
};

type Edge = {
  id: string;
  label: string;
  source: string;
  target: string;
  metadata: { [key: string]: string };
};

function getAllProcesses(ldGraph: LDGraph, context: LDContext): LDNode[] {
  return ldGraph.Nodes.filter(
    node => ROCrate.LDLabProcess.validate(node, context)
  );
}

function resolveOption<T>(opt: Option<T>, defaultValue: T): T {
  return opt != null ? opt as T : defaultValue;
}

function getNodeMetadata(node: LDNode, ldGraph: LDGraph, context: LDContext): { [key: string]: string } {
  switch(node.SchemaType[0]) {
    case "Sample":
      return Object.fromEntries(ROCrate.LDSample.getAdditionalProperties(node, ldGraph, context).map(
        (s) => [
          ROCrate.LDPropertyValue.getNameAsString(s, context),
          resolveOption(ROCrate.LDPropertyValue.tryGetValueAsString(s, context), "")
        ]
      ));
    case "LabProcess":
      return Object.fromEntries(ROCrate.LDLabProcess.getParameterValues(node, ldGraph, context).map(
        (s) => [
          ROCrate.LDPropertyValue.getNameAsString(s, context),
          resolveOption(ROCrate.LDPropertyValue.tryGetValueAsString(s, context), "")
        ]
      ));
    case "File":
      return {};
    default:
      console.log(node)
      throw new Error("Unsupported node type: " + node.SchemaType[0])
  }
}

function buildNodesAndEdgesFromProcesses(
  processes: LDNode[],
  ldGraph: LDGraph,
  context: LDContext
): { nodes: { [id: string]: Node }; edges: { [id: string]: Edge } } {
  const nodes: { [id: string]: Node } = {};
  const edges: { [id: string]: Edge } = {};

  processes.forEach((process) => {
    const id = process.id;

    const inputs = ROCrate.LDLabProcess.getObjects(process, ldGraph, context);
    const outputs = ROCrate.LDLabProcess.getResults(process, ldGraph, context);

    if (inputs.length > 0 && outputs.length > 0) {
      let label = id;
      let protocol = ROCrate.LDLabProcess.tryGetExecutesLabProtocol(process, ldGraph, context);
      if (protocol) {
        protocol = protocol as LDNode;
        label = resolveOption(ROCrate.LDLabProtocol.tryGetNameAsString(protocol, context), protocol.id);
      }
      edges[id] = {
        id,
        label,
        source: inputs[0].id,
        target: outputs[0].id,
        metadata: getNodeMetadata(process, ldGraph, context)
      };

      const input = inputs[0];
      const output = outputs[0];

      if (!nodes[input.id]) {
        nodes[input.id] = {
          id: input.id,
          label: input.id,
          type: input.AdditionalType[0] || input.SchemaType[0],
          metadata: getNodeMetadata(input, ldGraph, context)
        };
      }
      if (!nodes[output.id]) {
        nodes[output.id] = {
          id: output.id,
          label: output.id,
          type: output.AdditionalType[0] || output.SchemaType[0],
          metadata: getNodeMetadata(output, ldGraph, context)
        };
      }
    }
  });

  return { nodes, edges };
}

function layoutNodes(nodes: { [id: string]: Node }, edges: { [id: string]: Edge }) {
  const dg = new dagre.graphlib.Graph();
  dg.setGraph({
    rankdir: 'LR',
  });
  dg.setDefaultEdgeLabel(function () { return {}; });

  Object.values(nodes).forEach((node) => {
    dg.setNode(node.id, { label: node.label, width: 2, height: 2 });
  });

  Object.values(edges).forEach((edge) => {
    dg.setEdge(edge.source, edge.target, { label: edge.label });
  });

  dagre.layout(dg);

  // Find min/max for normalization
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  Object.values(nodes).forEach((node) => {
    const { x, y } = dg.node(node.id);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  });

  // Avoid division by zero
  const dx = maxX - minX || 1;
  const dy = maxY - minY || 1;

  Object.values(nodes).forEach((node) => {
    const { x, y } = dg.node(node.id);
    node.x = (x - minX) / dx;
    node.y = (y - minY) / dy;
  });
}

export class GraphView {
  private sigmaInstance: Sigma | null = null;
  private nodes: { [id: string]: Node } = {};
  private edges: { [id: string]: Edge } = {};

  constructor(graph: LDGraph, domElement: HTMLElement) {
    let context = graph.TryGetContext();
    if (!context) throw new Error("No context found in LDGraph.");
    context = context as LDContext;

    const processes = getAllProcesses(graph, context);
    const { nodes, edges } = buildNodesAndEdgesFromProcesses(processes, graph, context);
    this.nodes = nodes;
    this.edges = edges;

    // @TODO
    window.ROCrate = ROCrate;
    window.nodes = this.nodes;
    window.edges = this.edges;

    layoutNodes(this.nodes, this.edges);

    const sigmaGraph = new Graph();
    Object.values(this.nodes).forEach((node) => {
      sigmaGraph.addNode(node.id, { x: node.x, y: node.y, label: node.label });
    });
    Object.values(this.edges).forEach((edge) => {
      sigmaGraph.addDirectedEdge(edge.source, edge.target, { label: edge.label });
    });
    this.sigmaInstance = new Sigma(sigmaGraph, domElement, {
      renderEdgeLabels: true,
      defaultEdgeType: "arrow",
      labelRenderedSizeThreshold: 4,
    });
  }

  zoomToLocation(id: string) {
    if (!this.sigmaInstance) return;

    // Try node first
    const node = this.nodes[id];
    if (node) {
      if (node.x === undefined || node.y === undefined) {
        throw new Error("Node position is undefined. You need to layout the graph first.");
      }
      console.log(node)
      this.sigmaInstance.getCamera().animate(
        { x: node.x, y: node.y, ratio: 0.2 },
        { duration: 600 }
      );
      return;
    }

    // Try edge
    const edge = this.edges[id];
    if (edge) {
      const source = this.nodes[edge.source];
      const target = this.nodes[edge.target];
      if (!source || !target || source.x === undefined || source.y === undefined || target.x === undefined || target.y === undefined) {
        throw new Error("Edge endpoint position is undefined. You need to layout the graph first.");
      }
      // Center between source and target
      const x = (source.x + target.x) / 2;
      const y = (source.y + target.y) / 2;
      this.sigmaInstance.getCamera().animate(
        { x, y, ratio: 0.2 },
        { duration: 600 }
      );
    }
  }

  getLocations(includeEdges = false): string[] {
    const nodeIds = Object.keys(this.nodes);
    if (!includeEdges) return nodeIds;
    return nodeIds.concat(Object.keys(this.edges));
  }

  destroy() {
    if (this.sigmaInstance) {
      this.sigmaInstance.kill();
      this.sigmaInstance = null;
    }
  }
}
