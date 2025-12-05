import React, { useEffect, useRef, useState } from "react";
import { JsonController } from '@nfdi4plants/arctrl'
import { GraphView } from "./lib/GraphView";
import { FormControl, SelectPanel, Button } from '@primer/react';
import { TriangleDownIcon } from '@primer/octicons-react';
import { type ActionListItemInput } from '@primer/react/deprecated';

type LDGraph = ReturnType<typeof JsonController.LDGraph.fromROCrateJsonString>;

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "600px",
  background: "white",
};

const GraphViewer: React.FC<{ graph: LDGraph }> = ({ graph }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const graphViewRef = useRef<GraphView | null>(null);
  const [locations, setLocations] = useState<ActionListItemInput[]>([]);
  const [selected, setSelected] = useState<ActionListItemInput | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('');

  window.ldGraph = graph;

  useEffect(() => {
    if (containerRef.current) {
      graphViewRef.current = new GraphView(graph, containerRef.current);
      window.sigmaGraph = graphViewRef.current;
      const locs = graphViewRef.current.getLocations(false).map(id => ({ text: id, id }));
      setLocations(locs);
    }
    return () => {
      if (graphViewRef.current) {
        graphViewRef.current.destroy();
        graphViewRef.current = null;
      }
    };
  }, [graph]);

  // @TODO show metadta using https://primer.style/product/components/data-table/
  return (
    <div>
      <FormControl>
        <FormControl.Label htmlFor="rp" id="selectLabel-location">
          Go to location
        </FormControl.Label>
        <SelectPanel
          renderAnchor={({children, ...anchorProps}) => (
            <Button {...anchorProps} trailingAction={TriangleDownIcon} aria-haspopup="dialog">
              {selected ? selected.text : "Pick location"}
            </Button>
          )}
          placeholder="Pick location"
          open={open}
          onOpenChange={setOpen}
          items={locations.filter(
            item =>
              item.text?.toLowerCase().includes(filter.toLowerCase())
          )}
          selected={selected}
          onSelectedChange={item => {
            setSelected(item);
            setOpen(false);
            if (item && graphViewRef.current) {
              graphViewRef.current.zoomToLocation(item.id.trim());
            }
          }}
          onFilterChange={setFilter}
        />
      </FormControl>
      <div style={{ marginTop: 8 }} />
      <div ref={containerRef} style={containerStyle} />
    </div>
  );
};

export default GraphViewer;
