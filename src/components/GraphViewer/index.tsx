import React, { useEffect, useRef, useState } from "react";
import { JsonController } from '@nfdi4plants/arctrl'
import { GraphView } from "./lib/GraphView";
import { FormControl, SelectPanel, Button } from '@primer/react';
import { TriangleDownIcon } from '@primer/octicons-react';
import { type ActionListItemInput } from '@primer/react/deprecated';
import { Table, DataTable } from '@primer/react/experimental';

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
  const [hovered, setHovered] = useState<{ id: string, metadata: { [key: string]: string }, input?:string, output?:string } | null>(null);

  window.ldGraph = graph;

  useEffect(() => {
    if (containerRef.current) {
      graphViewRef.current = new GraphView(
        graph,
        containerRef.current,
        node => setHovered({ id: node.id, metadata: node.metadata }),
        edge => setHovered({ id: edge.id, metadata: edge.metadata , input: edge.source, output: edge.target})
      );
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
    <div style={{ position: "relative" }}>
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
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          margin: 16,
          zIndex: 10,
          background: "white",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          minWidth: 240,
          maxWidth: 360,
          maxHeight: 300,
          overflow: "auto",
          padding: 12,
        }}
      >
        {hovered && (
          <Table.Container>
            <Table.Title as="h2" id="metadata-table" style={{ fontSize: 16, marginBottom: 8 }}>
              Metadata for <span style={{ fontWeight: 600 }}>{hovered.id}</span>
            </Table.Title>
            {(hovered.input || hovered.output) && (
              <div style={{ marginBottom: 8 }}>
                {hovered.input && (
                  <Button
                    size="small"
                    variant="invisible"
                    onClick={() => {
                      if (graphViewRef.current) {
                        graphViewRef.current.zoomToLocation(hovered.input!);
                      }
                    }}
                    style={{ marginRight: 8 }}
                  >
                    Jump to input
                  </Button>
                )}
                {hovered.output && (
                  <Button
                    size="small"
                    variant="invisible"
                    onClick={() => {
                      if (graphViewRef.current) {
                        graphViewRef.current.zoomToLocation(hovered.output!);
                      }
                    }}
                  >
                    Jump to output
                  </Button>
                )}
              </div>
            )}
            <DataTable
              aria-labelledby="metadata-table"
              data={Object.entries(hovered.metadata).map(([key, value], idx) => ({
                id: idx,
                key,
                value,
              }))}
              columns={[
                {
                  header: 'Key',
                  field: 'key',
                  rowHeader: true,
                },
                {
                  header: 'Value',
                  field: 'value',
                },
              ]}
            />
          </Table.Container>
        )}
      </div>
    </div>
  );
};

export default GraphViewer;
