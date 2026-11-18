import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import FileBrowser from "../FileBrowser";
import FileTree from "../FileTree";
import ProvenanceGraph from "../ProvenanceGraph";
import { errorMessage } from "../ProvenanceGraph/errorMessage";
import {
    landingLocation,
    loadCrate,
    locationToNavigation,
    navigationToLocation,
    type Crate,
    type FileLocation,
} from "../../crate";
import { crateArc, crateId } from "../../crateData";
import { START_NAVIGATION, type Navigation } from "../../provenance/navigation";
import {
    SplitPageLayout,
    Button,
    IconButton,
    useResponsiveValue,
    Dialog,
    Banner,
} from "@primer/react";
import { UnderlinePanels } from "@primer/react/experimental";
import Icons from "../Icons";
import { XCircleIcon } from "@primer/octicons-react";
import { type LayoutOptions, type ViewerTab } from "../../config";

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

// The graph fills the window below the tab row, and stays usable in a short window.
const GRAPH_HEIGHT = "max(420px, calc(100vh - 8rem))";

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
    // A workflow crate has no provenance graph, so it shows the files without tabs.
    const hasGraph = crate.kind !== "workflow";

    const [sidebarActive, setSidebarActive] = useState(layout?.sidebarOpen ?? false);

    const isSmallScreen = useResponsiveValue(
        {
            narrow: true,
            regular: true,
            wide: false,
        },
        false
    );

    // The file browser and the graph each keep their own place. Opening the other tab moves neither.
    const [fileLocation, setFileLocation] = useState<FileLocation>(() => landingLocation(crate));
    const [graphNav, setGraphNav] = useState<Navigation>(START_NAVIGATION);

    const [tab, setTab] = useState<ViewerTab>(
        hasGraph && layout?.initialTab === "provenance" ? "provenance" : "files"
    );
    // The graph mounts when its tab opens for the first time, and then stays mounted with its zoom,
    // expanded edges and scroll position.
    const [graphOpened, setGraphOpened] = useState(tab === "provenance");
    const openTab = (next: ViewerTab) => {
        setTab(next);
        if (next === "provenance") setGraphOpened(true);
    };

    // A button that leads to the other tab disappears with its own tab, so the tab it opens takes the focus.
    const tabsId = useId();
    const tabToFocus = useRef<ViewerTab | null>(null);
    useEffect(() => {
        if (tabToFocus.current !== tab) return;
        tabToFocus.current = null;
        document.getElementById(`${tabsId}-tab-${tab}`)?.focus();
    }, [tab, tabsId]);
    const leadTo = (next: ViewerTab) => {
        tabToFocus.current = next;
        openTab(next);
    };

    // Where the "Show in file viewer" button leads, and where the "Show in provenance graph" button leads.
    const viewerTarget = useMemo(
        () => navigationToLocation(crate, graphNav),
        [crate, graphNav]
    );
    const graphTarget = useMemo(
        () => locationToNavigation(crate, fileLocation),
        [crate, fileLocation]
    );

    // The tree navigates the open tab. In the file browser it opens the path. In the graph it leads to the
    // place that belongs to the path, and an item the graph has no place for cannot be selected.
    const onGraphTab = tab === "provenance";
    const selectInTree = useCallback(
        (path: string) => {
            if (onGraphTab) {
                const target = locationToNavigation(crate, { path });
                if (target) setGraphNav(target);
            } else {
                // The file that is already open keeps its tab.
                setFileLocation((current) => (current.path === path ? current : { path }));
            }
            if (isSmallScreen) {
                setSidebarActive(false);
            }
        },
        [crate, onGraphTab, isSmallScreen]
    );
    const selectableInGraph = useCallback(
        (path: string) => locationToNavigation(crate, { path }) !== undefined,
        [crate]
    );
    // In the graph the tree marks the file or folder that belongs to the current place.
    const treePath = onGraphTab ? viewerTarget?.path : fileLocation.path;

    const renderedTree = useMemo(
        () => (
            <FileTree
                crate={crate}
                currentPath={treePath}
                onSelect={selectInTree}
                isSelectable={onGraphTab ? selectableInGraph : undefined}
            />
        ),
        [crate, treePath, selectInTree, onGraphTab, selectableInGraph]
    );

    const sidebarToggle = (
        <IconButton
            aria-label="Expand sidebar"
            variant="invisible"
            icon={
                sidebarActive
                    ? Icons.SidebarCollapseIcon
                    : Icons.SidebarExpandIcon
            }
            onClick={() => setSidebarActive(!sidebarActive)}
        />
    );

    const unloadButton = clearJsonCallback && (
        <IconButton
            style={{ marginLeft: "auto" }}
            aria-label="Clear loaded JSON and upload new"
            variant="danger"
            icon={XCircleIcon}
            onClick={() => clearJsonCallback()}
        />
    );

    const fileBrowser = (
        <FileBrowser
            crate={crate}
            location={fileLocation}
            onLocationChange={setFileLocation}
            // Without tabs the header of the file browser is the only toolbar.
            headerStart={hasGraph ? undefined : sidebarToggle}
            headerActions={
                hasGraph
                    ? graphTarget && (
                          <Button
                              size="small"
                              onClick={() => {
                                  setGraphNav(graphTarget);
                                  leadTo("provenance");
                              }}
                          >
                              Show in provenance graph
                          </Button>
                      )
                    : unloadButton
            }
        />
    );

    return (
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
                {hasGraph ? (
                    // Primer renders the tab row and the panels as siblings, and it drops every other child. The
                    // buttons therefore sit next to the tabs as cells of this grid: the first row holds the
                    // sidebar toggle, the tabs and the unload button, and each panel spans the row below.
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "auto minmax(0, 1fr) auto",
                            columnGap: "0.5rem",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ gridColumn: 1, gridRow: 1 }}>{sidebarToggle}</div>
                        {unloadButton && (
                            <div style={{ gridColumn: 3, gridRow: 1 }}>{unloadButton}</div>
                        )}
                        <UnderlinePanels
                            id={tabsId}
                            aria-label="Views of the ARC"
                            value={tab}
                            onChange={({ value }) => openTab(value as ViewerTab)}
                        >
                            <UnderlinePanels.Tab value="files">Files</UnderlinePanels.Tab>
                            <UnderlinePanels.Tab value="provenance">Provenance graph</UnderlinePanels.Tab>
                            <UnderlinePanels.Panel value="files" style={{ gridColumn: "1 / -1" }}>
                                {fileBrowser}
                            </UnderlinePanels.Panel>
                            <UnderlinePanels.Panel
                                value="provenance"
                                className="pt-3"
                                style={{ gridColumn: "1 / -1" }}
                            >
                                {graphOpened && (
                                    <ProvenanceGraph
                                        crate={crate}
                                        nav={graphNav}
                                        onNavChange={setGraphNav}
                                        height={GRAPH_HEIGHT}
                                        actions={
                                            viewerTarget ? (
                                                <Button
                                                    size="small"
                                                    title={viewerTargetTitle(
                                                        viewerTarget,
                                                        crateArc(crate).Title
                                                    )}
                                                    onClick={() => {
                                                        setFileLocation(viewerTarget);
                                                        leadTo("files");
                                                    }}
                                                >
                                                    Show in file viewer
                                                </Button>
                                            ) : undefined
                                        }
                                    />
                                )}
                            </UnderlinePanels.Panel>
                        </UnderlinePanels>
                    </div>
                ) : (
                    fileBrowser
                )}
            </SplitPageLayout.Content>
        </SplitPageLayout>
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
