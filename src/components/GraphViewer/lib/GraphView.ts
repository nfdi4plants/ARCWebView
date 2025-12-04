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
  x?: number;
  y?: number;
};

type Edge = {
  id: string;
  label: string;
  source: string;
  target: string;
};

function getAllProcesses(ldGraph: LDGraph, context: LDContext): LDNode[] {
  return ldGraph.Nodes.filter(
    node => ROCrate.LDLabProcess.validate(node, context)
  );
}

function nodesAndEdgesFromProcesses(processes: LDNode[], ldGraph: LDGraph, context: LDContext) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

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
      edges.push({ id, label, source: inputs[0].id, target: outputs[0].id });

      const input = inputs[0];
      const output = outputs[0];

      if (!nodes.some(n => n.id === input.id)) {
        nodes.push({ id: input.id, label: input.id });
      }
      if (!nodes.some(n => n.id === output.id)) {
        nodes.push({ id: output.id, label: output.id });
      }
    }
  });

  return { nodes, edges };
}

function layoutNodes(nodes: Node[], edges: Edge[]) {
  const dg = new dagre.graphlib.Graph();
  dg.setGraph({ rankdir: 'LR' });
  dg.setDefaultEdgeLabel(function() { return {}; });

  nodes.forEach((node) => {
    dg.setNode(node.id, { label: node.label, width: 20, height: 20 });
  });

  edges.forEach((edge) => {
    dg.setEdge(edge.source, edge.target, { label: edge.label });
  });

  dagre.layout(dg);

  nodes.forEach((node) => {
    const { x, y } = dg.node(node.id);
    node.x = x;
    node.y = y;
  });
}

function buildSigmaGraph(graph: LDGraph): Graph {
  let context = graph.TryGetContext();
  if(!context) throw new Error("No context found in LDGraph.");
  context = context as LDContext;

  const processes = getAllProcesses(graph, context);
  const { nodes, edges } = nodesAndEdgesFromProcesses(processes, graph, context);
  layoutNodes(nodes, edges);

  const sigmaGraph = new Graph();
  nodes.forEach((node) => {
    sigmaGraph.addNode(node.id, { x: node.x, y: node.y, label: node.label });
  });
  edges.forEach((edge) => {
    sigmaGraph.addDirectedEdge(edge.source, edge.target, { label: edge.label });
  });
  return sigmaGraph;
}

export class GraphView {
  private sigmaInstance: Sigma | null = null;

  constructor(graph: LDGraph, domElement: HTMLElement) {
    const sigmaGraph = buildSigmaGraph(graph);
    this.sigmaInstance = new Sigma(sigmaGraph, domElement, { renderEdgeLabels: true, defaultEdgeType: "arrow" });
  }

  destroy() {
    if (this.sigmaInstance) {
      this.sigmaInstance.kill();
      this.sigmaInstance = null;
    }
  }
}