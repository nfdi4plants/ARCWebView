import { useState, type ReactNode } from "react";
import { Banner } from "@primer/react";
import { crateId, crateProvenance, type Crate } from "../../crate";
import { START_NAVIGATION, type Navigation } from "../../provenance/navigation";
import { ProvenanceExplorer } from "./ProvenanceExplorer";

export interface ProvenanceGraphProps {
    crate: Crate;
    // The place the graph shows. With it the owner holds the place: the graph shows what it is given and
    // asks for every change through onNavChange. Without it the graph holds the place itself.
    nav?: Navigation;
    // Where a graph that holds its own place starts. The default is the overview of the datasets.
    defaultNav?: Navigation;
    // Called with the place the user navigates to, in either mode.
    onNavChange?: (nav: Navigation) => void;
    // Shown at the right end of the header.
    actions?: ReactNode;
    // The height of the graph. The default is 70vh and at least 420px.
    height?: number | string;
}

// The provenance graph of a crate. The index comes from the crate, so every graph of one crate shares it.
// Another crate mounts a fresh explorer with clean error, canvas, expansion and scroll state.
export default function ProvenanceGraph({
    crate,
    nav,
    defaultNav,
    onNavChange,
    actions,
    height,
}: ProvenanceGraphProps) {
    const provenance = crateProvenance(crate);

    const [ownNav, setOwnNav] = useState<Navigation>(defaultNav ?? START_NAVIGATION);
    // The place the explorer asked for last. After a navigation that starts in the explorer its content
    // takes focus, because the clicked node or crumb is gone. A place that the owner sets is another object,
    // so the focus stays where it is.
    const [requested, setRequested] = useState<Navigation | undefined>(undefined);
    // The place of one crate means nothing in another. React lets a component reset state while it
    // renders, so the explorer draws nothing of the old place.
    const [seenCrate, setSeenCrate] = useState(crate);
    if (seenCrate !== crate) {
        setSeenCrate(crate);
        setOwnNav(START_NAVIGATION);
        setRequested(undefined);
    }
    const current = nav ?? ownNav;

    if (provenance === undefined) {
        return <p className="color-fg-muted">This crate has no provenance graph.</p>;
    }
    if (provenance.error !== undefined) {
        return (
            <Banner
                variant="critical"
                title="The provenance graph could not be built."
                description={provenance.error}
            />
        );
    }

    // The explorer fills its parent, so the box needs an explicit height.
    return (
        <div style={height === undefined ? { height: "70vh", minHeight: "420px" } : { height }}>
            <ProvenanceExplorer
                key={crateId(crate)}
                index={provenance.index}
                nav={current}
                onNavChange={(next) => {
                    setRequested(next);
                    if (nav === undefined) setOwnNav(next);
                    onNavChange?.(next);
                }}
                focusOnNavigation={current === requested}
                actions={actions}
            />
        </div>
    );
}
