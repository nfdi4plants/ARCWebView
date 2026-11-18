# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Types of changes**

-   ✨ `Added` for new features.
-   🔄 `Changed` for changes in existing functionality.
-   🗑️ `Deprecated` for soon-to-be removed features.
-   🔥 `Removed` for now removed features.
-   🐛 `Fixed` for any bug fixes.
-   🔒 `Security` in case of vulnerabilities.

## [Unreleased]

## 3.0.0 - 2026-11-18

### ✨ Added

- Added support for Workflow RO-Crate and Workflow Run Crate files. The viewer detects the kind from the crate profiles and opens a single ARC workflow or run on its folder.
- Added the `url` and `workflowhub` URL parameters to the GitHub Pages showcase. `url` loads a crate from any address that allows cross-origin reads. `workflowhub` loads the latest version of a public WorkflowHub entry through WorkflowHub's GA4GH TRS API.
- Added the exports `FileTree`, `FileBrowser` and `ProvenanceGraph`, so a page can use the parts of the viewer separately. `loadCrate` parses a crate once for all of them. `landingLocation`, `locationToNavigation` and `navigationToLocation` connect the file browser and the graph.
- Added the `layout.initialTab` option, which selects the tab that is open first.
- Added the `@nfdi4plants/arc-web-view/style.css` export for the styles of the provenance graph. The JavaScript does not load them, so an application imports this file once.

### 🔄 Changed

- Changed the ARCtrl dependency to ^3.3.1.
- Changed the viewer to show the file browser and the provenance graph as two tabs instead of one below the other. Each tab keeps its own place, and the "Show in provenance graph" and "Show in file viewer" buttons open the other tab on the matching place.
- Changed the file tree in the sidebar to navigate the open tab. On the graph tab a file or folder leads to its place in the graph, and a file the graph has no place for is shown muted.
- Changed the library build to leave every `@primer/react` entry point external. `@primer/react/experimental` was bundled into the library before.

### 🔥 Removed

- Removed the README and license panel of the root folder, together with the `readmefetch` and `licensefetch` options and the `marked` and `mermaid` dependencies.
- Removed the `layout.provenancesOpen` option. The graph is a tab now and has no collapsed state. Use `layout.initialTab` to open the viewer on the graph.

### 🐛 Fixed

- Fixed the `t` hotkey of the search box, which took the key from every other input field on the page.
- Fixed the links of the file table and the breadcrumbs, which added `#` to the URL of the page.
- Fixed the file tree not opening the folders above a file opened through the search, the breadcrumbs or the file table.
- Fixed an annotation table named "Metadata", which was taken for the metadata tab of its isa file.
- Fixed hard-coded element ids in the search box and the tabs of a file.

## 2.0.0 - 2026-10-23

### ✨ Added

- Added support for graph view and sync with file tree option. (by @caroot)
- Added argument `showUnloadButton` to show/hide the json unload button #12 (by @Freymaurer)

### 🔄 Changed

- Changed internal API to unify decision tree to determine: showcase (gh-pages), plugin (invenio) or component mode.

## 1.2.0 - 2026-10-07

### ✨ Added

- Added file name support to the download functionality. (by @j-bauer)

### 🐛 Fixed

- Correctly externalize React and React DOM in the build configuration. (by @dinayun)

## 1.1.0 - 2026-01-19

### ✨ Added

- Add support for run and workflow metadata files. (by @caroott)

## 1.0.1 - 2026-01-18

### 🔄 Changed

- First Release with Changelog
- Update ARCtrl dependency to 3.0.0-beta.16 to update json parsing for RO-Crate files.

