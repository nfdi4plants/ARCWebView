import React, { useEffect, useRef } from "react";
import { ROCrate } from '@nfdi4plants/arctrl'
import Sigma from "sigma";
import Graph from "graphology";
import dagre from "@dagrejs/dagre";

const containerStyle: React.CSSProperties = {
  width: "800px",
  height: "600px",
  background: "white",
};

function getAllProcesses(graph: any) {
  const processes = graph.Nodes.filter(
    node => ROCrate.LDLabProcess.validate(node, graph.TryGetContext())
  );
  return processes;
}

function addNodesFromProcesses(processes: any, graph: any, sigmaGraph: Graph) {
  let dg = new dagre.graphlib.Graph()

  dg.setGraph({ rankdir: 'LR' })
  // Default to assigning a new object as a label for each new edge.
  dg.setDefaultEdgeLabel(function() { return {}; });

  let edges = []

  processes.forEach((process) => {
    // @TODO this crashes if there is no input or output (see Mielke ARC)
    let input = ROCrate.LDLabProcess.getObjects(process, graph, graph.TryGetContext())[0].id
    let output = ROCrate.LDLabProcess.getResults(process, graph, graph.TryGetContext())[0].id
    if (!dg.hasNode(input))
      dg.setNode(input, { label: input,  width: 144, height: 100 });
    //sigmaGraph.addNode(input, { x: Math.random(), y:Math.random(), label: input})
    if (!dg.hasNode(output))
      dg.setNode(output, { label: output,  width: 144, height: 100 });
    dg.setEdge(input, output)
    console.log(process)
    const protocol = ROCrate.LDLabProcess.tryGetExecutesLabProtocol(process, graph, graph.TryGetContext())
    const edgeLabel = protocol?.name || protocol.id ;
    edges.push({ in: input, out: output, label: edgeLabel })
  })
  dagre.layout(dg)
  console.log(dg)
  window.dg = dg;
  dg.nodes().forEach((n) => {
    sigmaGraph.addNode(n, { x: dg._nodes[n].x, y: dg._nodes[n].y, label: n})
  })
  edges.forEach((e) => {
    sigmaGraph.addEdge(e.in, e.out, { label: e.label })
  })
  //sigmaGraph.addNode(n, { x: Math.random(), y:Math.random(), label: output})
  //sigmaGraph.addDirectedEdge(input, output)
  return sigmaGraph

}

const GraphViewer: React.FC<{ graph: any }> = ({ graph }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaInstanceRef = useRef<Sigma | null>(null);

  useEffect(() => {
    // Create a graphology graph
    window.ldgraph = graph;
    let sigmaGraph = new Graph();
    let allProcs = getAllProcesses(graph);
    sigmaGraph = addNodesFromProcesses(allProcs, graph, sigmaGraph);

    // Instantiate sigma.js and render the graph
    if (containerRef.current) {
      window.graph = sigmaGraph;
      sigmaInstanceRef.current = new Sigma(sigmaGraph, containerRef.current, { renderEdgeLabels: true });
    }

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
