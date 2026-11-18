import { useCallback, useMemo, useRef, useState } from "react";
import FileBrowser from "../FileBrowser";
import FileTree from "../FileTree";
import ProvenanceGraph from "../ProvenanceGraph";
import { errorMessage } from "../ProvenanceGraph/errorMessage";
import {
    crateArc,
    crateId,
    landingLocation,
    loadCrate,
    locationToNavigation,
    navigationToLocation,
    type Crate,
    type FileLocation,
} from "../../crate";
import { START_NAVIGATION, type Navigation } from "../../provenance/navigation";
import {
    SplitPageLayout,
    Stack,
    Button,
    IconButton,
    useResponsiveValue,
    Dialog,
    Banner,
    Heading
} from "@primer/react";
import Icons from "../Icons";
import { ChevronDownIcon, ChevronUpIcon, XCircleIcon } from "@primer/octicons-react";
import { type LayoutOptions } from "../../config";

interface SideSheetProps {
    close: () => void;
    children?: React.ReactNode;
}

function SideSheet({ close, children }: SideSheetProps) {
    return (
        <Dialog title="My Dialog" onClose={close} position="left">
            {children}
        </Dialog>
    );
}

// The tooltip of the button that opens a place in the file viewer. The root has no path, so it shows as the
// title of the ARC.
function viewerTargetTitle(target: FileLocation, arcTitle: string | undefined): string {
    const place = target.path === "" ? arcTitle || "ARC root" : target.path;
    return target.table === undefined
        ? `Open ${place}`
        : `Open ${place}, table ${target.table}`;
}

interface ViewerOptions {
    clearJsonCallback?: () => void;
    layout?: LayoutOptions;
}

interface WebViewerProps extends ViewerOptions {
    jsonString: string;
}

function Viewer({
    crate,
    clearJsonCallback,
    layout,
}: ViewerOptions & { crate: Crate }) {
    const [sidebarActive, setSidebarActive] = useState(layout?.sidebarOpen ?? false);

    const isSmallScreen = useResponsiveValue(
        {
            narrow: true,
            regular: true,
            wide: false,
        },
        false
    );

    // The file browser and the graph each have their place, and the viewer holds both, so one can lead to
    // the other.
    const [fileLocation, setFileLocation] = useState<FileLocation>(() => landingLocation(crate));
    const [graphNav, setGraphNav] = useState<Navigation>(START_NAVIGATION);

    const viewerRef = useRef<HTMLDivElement>(null);
    const provenanceRef = useRef<HTMLElement>(null);
    const provenanceHeadingRef = useRef<HTMLHeadingElement>(null);
    const [graphVisible, setGraphVisible] = useState(layout?.provenancesOpen ?? true);

    // Where the "Show in file viewer" button leads, and where the "Show in provenance graph" button leads.
    const viewerTarget = useMemo(
        () => navigationToLocation(crate, graphNav),
        [crate, graphNav]
    );
    const graphTarget = useMemo(
        () => locationToNavigation(crate, fileLocation),
        [crate, fileLocation]
    );

    const selectInTree = useCallback(
        (path: string) => {
            // The file that is already open keeps its tab.
            setFileLocation((current) => (current.path === path ? current : { path }));
            if (isSmallScreen) {
                setSidebarActive(false);
            }
        },
        [isSmallScreen]
    );

    const openInViewer = (target: FileLocation) => {
        setFileLocation(target);
        if (isSmallScreen) {
            setSidebarActive(false);
        }
        viewerRef.current?.scrollIntoView({ block: "start" });
        viewerRef.current?.focus({ preventScroll: true });
    };

    const showInGraph = (target: Navigation) => {
        setGraphNav(target);
        setGraphVisible(true);
        provenanceRef.current?.scrollIntoView({ block: "start" });
        provenanceHeadingRef.current?.focus({ preventScroll: true });
    };

    const renderedTree = useMemo(
        () => (
            <FileTree
                crate={crate}
                currentPath={fileLocation.path}
                onSelect={selectInTree}
            />
        ),
        [crate, fileLocation.path, selectInTree]
    );

    return (
        <div
            ref={viewerRef}
            role="region"
            aria-label="File viewer"
            tabIndex={-1}
        >
            <SplitPageLayout>
                {/* <SplitPageLayout.Header >
            </SplitPageLayout.Header> */}
                <div className="z-2">
                    {sidebarActive && (isSmallScreen as boolean) && (
                        <SideSheet close={() => setSidebarActive(false)}>
                            {renderedTree}
                        </SideSheet>
                    )}
                </div>
                <SplitPageLayout.Pane
                    aria-label="Sidebar"
                    resizable={true}
                    widthStorageKey={"arc-webviewer-sidebar-width"}
                    hidden={!sidebarActive || (isSmallScreen as boolean)}
                    sticky={true}
                >
                    {renderedTree}
                </SplitPageLayout.Pane>
                <SplitPageLayout.Content>
                    <Stack>
                        <FileBrowser
                            crate={crate}
                            location={fileLocation}
                            onLocationChange={setFileLocation}
                            headerStart={
                                <IconButton
                                    aria-label="Expand sidebar"
                                    variant="invisible"
                                    icon={
                                        sidebarActive
                                            ? Icons.SidebarCollapseIcon
                                            : Icons.SidebarExpandIcon
                                    }
                                    onClick={() =>
                                        setSidebarActive(!sidebarActive)
                                    }
                                />
                            }
                            headerActions={
                                <>
                                    {graphTarget && (
                                        <Button
                                            size="small"
                                            onClick={() => showInGraph(graphTarget)}
                                        >
                                            Show in provenance graph
                                        </Button>
                                    )}
                                    {clearJsonCallback && (
                                        <IconButton
                                            style={{ marginLeft: "auto" }}
                                            aria-label="Clear loaded JSON and upload new"
                                            variant="danger"
                                            icon={XCircleIcon}
                                            onClick={() => clearJsonCallback()}
                                        />
                                    )}
                                </>
                            }
                        />
                        {crate.kind !== "workflow" && (
                            <section
                                ref={provenanceRef}
                                aria-labelledby="provenance-graph-heading"
                                className="mt-4 pb-4"
                            >
                                <div className="d-flex flex-items-center mb-2" style={{ gap: "0.5rem" }}>
                                    <Heading
                                        ref={provenanceHeadingRef}
                                        as="h2"
                                        variant="medium"
                                        id="provenance-graph-heading"
                                        tabIndex={-1}
                                    >
                                        Provenance graph
                                    </Heading>
                                    <Button
                                        size="small"
                                        variant="invisible"
                                        leadingVisual={graphVisible ? ChevronUpIcon : ChevronDownIcon}
                                        aria-expanded={graphVisible}
                                        aria-controls="provenance-graph-body"
                                        onClick={() => setGraphVisible(!graphVisible)}
                                    >
                                        {graphVisible ? "Hide" : "Show"}
                                    </Button>
                                </div>
                                {graphVisible && (
                                    <div id="provenance-graph-body">
                                        <ProvenanceGraph
                                            crate={crate}
                                            nav={graphNav}
                                            onNavChange={setGraphNav}
                                            actions={
                                                viewerTarget ? (
                                                    <Button
                                                        size="small"
                                                        title={viewerTargetTitle(
                                                            viewerTarget,
                                                            crateArc(crate).Title
                                                        )}
                                                        onClick={() => openInViewer(viewerTarget)}
                                                    >
                                                        Show in file viewer
                                                    </Button>
                                                ) : undefined
                                            }
                                        />
                                    </div>
                                )}
                            </section>
                        )}
                    </Stack>
                </SplitPageLayout.Content>
            </SplitPageLayout>
        </div>
    );
}

// Parses the crate and shows it. Each crate gets its own viewer, so nothing of the last one stays.
export default function WebViewer({ jsonString, clearJsonCallback, ...options }: WebViewerProps) {
    const parsed = useMemo(() => {
        try {
            return { crate: loadCrate(jsonString) };
        } catch (error) {
            console.error("Could not load the crate", error);
            return { error: errorMessage(error) };
        }
    }, [jsonString]);

    return parsed.crate === undefined ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div style={{ minWidth: "300px" }}>
                <Banner
                    aria-label="Error"
                    title="Error"
                    description={parsed.error}
                    variant="critical"
                    onDismiss={clearJsonCallback}
                />
            </div>
        </div>
    ) : (
        <Viewer
            key={crateId(parsed.crate)}
            crate={parsed.crate}
            clearJsonCallback={clearJsonCallback}
            {...options}
        />
    );
}
