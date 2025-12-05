import Sigma from "sigma";
import Graph from "graphology";
import dagre from "@dagrejs/dagre";
import { JsonController, ROCrate } from '@nfdi4plants/arctrl';

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

function getNodeMetadata(node: LDNode, ldGraph: LDGraph, context: LDContext): { [key: string]: string } {
  switch(node.SchemaType[0]) {
    case "Sample":
      return Object.fromEntries(ROCrate.LDSample.getAdditionalProperties(node, ldGraph, context).map(
        (s) => [
          s.name, s.value
// @TODO for some reason the below doesn't work, I don't understand why.
//          ROCrate.LDPropertyValue.getNameAsString(s),
//          ROCrate.LDPropertyValue.getValueAsString(s)
        ]
      ));
    case "LabProcess":
      return Object.fromEntries(ROCrate.LDLabProcess.getParameterValues(node, ldGraph, context).map(
        (s) => [
          s.name, s.value
//          ROCrate.LDPropertyValue.getNameAsString(s),
//          ROCrate.LDPropertyValue.getValueAsString(s)
        ]
      ));
    case "File":
      return {};
    default:
      console.log(node)
      throw new Error("Unsupported node type: " + node.SchemaType[0])
  }
}

function nodesAndEdgesFromProcesses(processes: LDNode[], ldGraph: LDGraph, context: LDContext) {
  const nodes: { [id: string]: Node } = {};
  const edges: { [id: string]: Edge } = {};

  window.ROCrate = ROCrate;

  processes.forEach((process) => {
    const id = process.id;

    const inputs = ROCrate.LDLabProcess.getObjects(process, ldGraph, context as LDContext);
    const outputs = ROCrate.LDLabProcess.getResults(process, ldGraph, context as LDContext);

    if (inputs.length > 0 && outputs.length > 0) {
      let label = id;
      let protocol = ROCrate.LDLabProcess.tryGetExecutesLabProtocol(process, ldGraph, context);
      if(protocol) {
        protocol = protocol as LDNode;
        const name = ROCrate.LDLabProtocol.tryGetNameAsString(protocol, context);
        label = name ? name as string : protocol.id;
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

  // @TODO
  window.nodes = nodes;
  window.edges = edges;
  return { nodes, edges };
}

function layoutNodes(nodes: { [id: string]: Node }, edges: { [id: string]: Edge }) {
  const dg = new dagre.graphlib.Graph();
  dg.setGraph({ rankdir: 'LR' });
  dg.setDefaultEdgeLabel(function() { return {}; });

  Object.values(nodes).forEach((node) => {
    dg.setNode(node.id, { label: node.label, width: 20, height: 20 });
  });

  Object.values(edges).forEach((edge) => {
    dg.setEdge(edge.source, edge.target, { label: edge.label });
  });

  dagre.layout(dg);

  Object.values(nodes).forEach((node) => {
    const { x, y } = dg.node(node.id);
    node.x = x;
    node.y = y;
  });
}

function buildSigmaGraph(graph: LDGraph, context: LDContext): Graph {
  const processes = getAllProcesses(graph, context);
  const { nodes, edges } = nodesAndEdgesFromProcesses(processes, graph, context);
  layoutNodes(nodes, edges);

  const sigmaGraph = new Graph();
  Object.values(nodes).forEach((node) => {
    sigmaGraph.addNode(node.id, { x: node.x, y: node.y, label: node.label });
  });
  Object.values(edges).forEach((edge) => {
    sigmaGraph.addDirectedEdge(edge.source, edge.target, { label: edge.label });
  });
  return sigmaGraph;
}

export class GraphView {
  private sigmaInstance: Sigma | null = null;

  constructor(graph: LDGraph, domElement: HTMLElement) {
    let context = graph.TryGetContext();
    if(!context) throw new Error("No context found in LDGraph.");
    context = context as LDContext;

    const sigmaGraph = buildSigmaGraph(graph, context);
    this.sigmaInstance = new Sigma(sigmaGraph, domElement, { renderEdgeLabels: true, defaultEdgeType: "arrow" });
  }

  destroy() {
    if (this.sigmaInstance) {
      this.sigmaInstance.kill();
      this.sigmaInstance = null;
    }
  }
}
