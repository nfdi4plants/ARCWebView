import type { ARC, ArcTable, OntologyAnnotation } from "@nfdi4plants/arctrl";
import type { SearchCache, TreeNode } from "./types";

type Person = ARC["Contacts"][number];

function addFiles(entries: SearchCache[], node: TreeNode) {
    if (node.type === "file") {
        entries.push({ name: node.name, path: node.id, type: "file" });
    } else if (node.children) {
        node.children.forEach((child) => addFiles(entries, child));
    }
}

function addPersons(entries: SearchCache[], persons: Iterable<Person>, path: string) {
    for (const person of persons) {
        if (person.ORCID) {
            entries.push({ name: person.ORCID, path, type: "person" });
        }
        const name = [person.FirstName, person.MidInitials, person.LastName]
            .filter(Boolean)
            .join(" ");
        if (name) {
            entries.push({ name, path, type: "person" });
        }
    }
}

function addTables(entries: SearchCache[], tables: Iterable<ArcTable>, path: string) {
    for (const table of tables) {
        entries.push({ name: table.Name, path, type: "isa-table" });
        table.Headers.forEach((header) => {
            const term = header.TryGetTerm();
            if (!term) {
                entries.push({ name: header.toString(), path, type: "header" });
            }
            if (term) {
                const nametext = (term as OntologyAnnotation).NameText;
                if (nametext) {
                    entries.push({ name: nametext, path, type: "header" });
                }
            }
        });
    }
}

// Everything the search box finds: the files of the tree, and the titles, persons, tables and column
// headers of the isa files. Each entry leads to the path of its file.
export function buildSearchCache(tree: TreeNode, arc: ARC): SearchCache[] {
    const entries: SearchCache[] = [];
    addFiles(entries, tree);
    arc.Assays.forEach((assay) => {
        const path = `assays/${assay.Identifier}/isa.assay.xlsx`;
        entries.push({ name: assay.Identifier, path, type: "isa-title" });
        addPersons(entries, assay.Performers, path);
        addTables(entries, assay.tables, path);
    });
    arc.Studies.forEach((study) => {
        const path = `studies/${study.Identifier}/isa.study.xlsx`;
        entries.push({ name: study.Identifier, path, type: "isa-title" });
        addPersons(entries, study.Contacts, path);
        addTables(entries, study.tables, path);
    });
    addPersons(entries, arc.Contacts, "isa.investigation.xlsx");
    arc.Runs.forEach((run) => {
        const path = `runs/${run.Identifier}/isa.run.xlsx`;
        entries.push({ name: run.Identifier, path, type: "isa-title" });
        addPersons(entries, run.Performers, path);
        addTables(entries, run.Tables, path);
    });
    arc.Workflows.forEach((workflow) => {
        const path = `workflows/${workflow.Identifier}/isa.workflow.xlsx`;
        entries.push({ name: workflow.Identifier, path, type: "isa-title" });
        addPersons(entries, workflow.Contacts, path);
    });
    return entries;
}
