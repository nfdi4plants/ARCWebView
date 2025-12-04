import React, { useEffect, useRef } from "react";
import { JsonController } from '@nfdi4plants/arctrl'
import { GraphView } from "./lib/GraphView";

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;

const containerStyle: React.CSSProperties = {
  width: "800px",
  height: "600px",
  background: "white",
};

const GraphViewer: React.FC<{ graph: LDGraph }> = ({ graph }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const graphViewRef = useRef<GraphView | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      graphViewRef.current = new GraphView(graph, containerRef.current);
      window.sigmaGraph = graphViewRef.current;
    }

    // Cleanup on unmount
    return () => {
      if (graphViewRef.current) {
        graphViewRef.current.destroy();
        graphViewRef.current = null;
      }
    };
  }, [graph]);

  return <div ref={containerRef} style={containerStyle} />;
};

export default GraphViewer;
