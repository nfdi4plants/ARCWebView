import React, { useEffect, useRef } from "react";
import Sigma from "sigma";
import Graph from "graphology";

const containerStyle: React.CSSProperties = {
  width: "800px",
  height: "600px",
  background: "white",
};

const GraphViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaInstanceRef = useRef<Sigma | null>(null);

  useEffect(() => {
    // Create a graphology graph
    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });

    // Instantiate sigma.js and render the graph
    if (containerRef.current) {
      sigmaInstanceRef.current = new Sigma(graph, containerRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (sigmaInstanceRef.current) {
        sigmaInstanceRef.current.kill();
        sigmaInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} style={containerStyle} />;
};

export default GraphViewer;