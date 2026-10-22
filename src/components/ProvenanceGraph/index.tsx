import type { ReactNode } from "react";
import type { Navigation } from "../../provenance/navigation";
import type { ProvenanceIndex } from "../../provenance/types";
import { ProvenanceExplorer } from "./ProvenanceExplorer";

interface ProvenanceGraphProps {
    index: ProvenanceIndex;
    nav: Navigation;
    onNavChange: (next: Navigation) => void;
    focusOnNavigation: boolean;
    actions?: ReactNode;
}

// The explorer fills its parent, so the box needs an explicit height. The owner builds the index and holds
// the navigation, and it keys this component to mount a fresh explorer for a new ARC.
export default function ProvenanceGraph({
    index,
    nav,
    onNavChange,
    focusOnNavigation,
    actions,
}: ProvenanceGraphProps) {
    return (
        <div style={{ height: "70vh", minHeight: "420px" }}>
            <ProvenanceExplorer
                index={index}
                nav={nav}
                onNavChange={onNavChange}
                focusOnNavigation={focusOnNavigation}
                actions={actions}
            />
        </div>
    );
}
