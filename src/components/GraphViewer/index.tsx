import React, { useEffect, useRef } from "react";
import { JsonController, ROCrate } from '@nfdi4plants/arctrl'
import Sigma from "sigma";
import Graph from "graphology";
import dagre from "@dagrejs/dagre";

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;
type LDContext = Parameters<typeof ROCrate.LDLabProcess.validate>[1];
type LDNode = Parameters<typeof ROCrate.LDLabProcess.validate>[0];

const containerStyle: React.CSSProperties = {
  width: "800px",
  height: "600px",
  background: "white",
};

type Node = {
  id: string;
  label: string;
  type: string;
  x?: number;
  y?: number;
};

type Edge = {
  id: string;
  label: string;
  source: string;
  target: string;
};

/**
 * Returns all nodes in the LDGraph that are valid Lab Processes.
 *
 * @param ldGraph - The LDGraph instance to search for processes.
 * @returns An array of nodes that are validated as Lab Processes.
 * @throws Error if no context is found in the LDGraph.
 */
 function getAllProcesses(ldGraph: LDGraph, context: LDContext): LDNode[] {
   const processes = ldGraph.Nodes.filter(
     node => ROCrate.LDLabProcess.validate(node, context)
   );
   return processes;
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

      // Only add unique nodes
      if (!nodes.some(n => n.id === input.id)) {
        nodes.push({ id: input.id, label: input.id, type: input.AdditionalType[0] || input.SchemaType[0] });
      }
      if (!nodes.some(n => n.id === output.id)) {
        nodes.push({ id: output.id, label: output.id, type: output.AdditionalType[0] || output.SchemaType[0] });
      }
    }
  });

  return { nodes, edges };
}

function layoutNodes(nodes: Node[], edges: Edge[]) {
  const dg = new dagre.graphlib.Graph()
  dg.setGraph({ rankdir: 'LR' })
  dg.setDefaultEdgeLabel(function() { return {}; }); // somehow needed

  nodes.forEach((node) => {
    dg.setNode(node.id, { label: node.label, width: 20, height: 20 });
  })

  edges.forEach((edge) => {
    dg.setEdge(edge.source, edge.target, { label: edge.label });
  })

  dagre.layout(dg)

  nodes.forEach((node) => {
    const { x, y } = dg.node(node.id);
    node.x = x;
    node.y = y;
  })
}

function buildSigmaGraph(graph: LDGraph) {
  let context = graph.TryGetContext();
  if(!context) throw new Error("No context found in LDGraph.");
  context = context as LDContext;

  const processes = getAllProcesses(graph, context);
  const { nodes, edges } = nodesAndEdgesFromProcesses(processes, graph, context);
  window.nodes = nodes;
  window.edges = edges;
  layoutNodes(nodes, edges);

  const sigmaGraph = new Graph();
  nodes.forEach((node) => {
    let color: string;
    let size: number;
    switch (node.type) {
      case "Source":
        color = "#3B734E";
        size = 4;
        break;
      case "Sample":
        color = "#2E68D3";
        size = 3;
        break;
      case "File":
        color = "#202328";
        size = 2;
        break;
      default:
        color = "black";
        size = 2;
        break;
    }
    sigmaGraph.addNode(node.id, { x: node.x, y: node.y, label: node.label, color, size })
  })
  edges.forEach((edge) => {
    sigmaGraph.addDirectedEdge(edge.source, edge.target, { label: edge.label })
  })
  return sigmaGraph

}

const GraphViewer: React.FC<{ graph: LDGraph }> = ({ graph }) => {
  window.ldGraph = graph;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaInstanceRef = useRef<Sigma | null>(null);

  useEffect(() => {
    // Create a graphology graph
    const sigmaGraph = buildSigmaGraph(graph);

    // Instantiate sigma.js and render the graph
    if (containerRef.current) {
      sigmaInstanceRef.current = new Sigma(sigmaGraph, containerRef.current, { renderEdgeLabels: true, defaultEdgeType: "arrow" });
      // https://www.sigmajs.org/storybook/?path=/story/sigma-edge-curve--interactions
    }

    window.ROCrate = ROCrate;
    window.sigmaGraph = sigmaGraph;

    // Cleanup on unmount
    return () => {
      if (sigmaInstanceRef.current) {
        sigmaInstanceRef.current.kill();
        sigmaInstanceRef.current = null;
      }
    };
  }, [graph]);

  return <div ref={containerRef} style={containerStyle} />;
};

export default GraphViewer;
