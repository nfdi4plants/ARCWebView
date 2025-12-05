import React, { useEffect, useRef, useState } from "react";
import { JsonController } from '@nfdi4plants/arctrl'
import { GraphView } from "./lib/GraphView";
import { Autocomplete, FormControl } from '@primer/react';

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "600px",
  background: "white",
};

const GraphViewer: React.FC<{ graph: LDGraph }> = ({ graph }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const graphViewRef = useRef<GraphView | null>(null);
  const [locationId, setLocationId] = useState("");
  const [locations, setLocations] = useState<{text: string, id: string}[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  window.ldGraph = graph;

  useEffect(() => {
    if (containerRef.current) {
      graphViewRef.current = new GraphView(graph, containerRef.current);
      window.sigmaGraph = graphViewRef.current;
      // Get locations for autocomplete
      const locs = graphViewRef.current.getLocations(true).map(id => ({ text: id, id }));
      setLocations(locs);
    }

    // Cleanup on unmount
    return () => {
      if (graphViewRef.current) {
        graphViewRef.current.destroy();
        graphViewRef.current = null;
      }
    };
  }, [graph]);

  const handleGoTo = (id?: string) => {
    const targetId = id ?? locationId;
    if (graphViewRef.current && targetId.trim()) {
      try {
        graphViewRef.current.zoomToLocation(targetId.trim());
      } catch (e) {
        alert((e as Error).message);
      }
    }
  };

  return (
    <div>
      <FormControl>
        <FormControl.Label
          htmlFor="rp"
          id="autocompleteLabel-location"
          visuallyHidden
        >
          Go to location
        </FormControl.Label>
        <Autocomplete>
          <Autocomplete.Input
            placeholder="Enter location"
          />
          <Autocomplete.Overlay>
            <Autocomplete.Menu
              selectedItemIds={selectedId ? [selectedId] : []}
              selectionVariant='single'
              aria-labelledby="autocompleteLabel-location"
              items={locations}
              onSelectedChange={items => {
                console.log(items);
                graphViewRef.current.zoomToLocation(items[0].id.trim());
              }}
            />
          </Autocomplete.Overlay>
        </Autocomplete>
      </FormControl>
      <div style={{ marginTop: 8 }} />
      <div ref={containerRef} style={containerStyle} />
    </div>
  );
};

export default GraphViewer;
