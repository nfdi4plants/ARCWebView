import { readFileSync } from 'node:fs';
import ts from 'typescript';

// Node runs these tests without a TypeScript loader, so each source module is transpiled with the
// installed compiler and imported from a data: URL. A data: module cannot resolve relative or bare
// specifiers, so relative imports become data: URLs of their own transpiled modules and
// '@nfdi4plants/arctrl' becomes the installed package's file: URL. Each module is transpiled once,
// so modules that import the same file share one instance of it (and one LoadError class).
const dataUrls = new Map();

function dataUrlOf(fileUrl) {
    const cached = dataUrls.get(fileUrl.href);
    if (cached) return cached;

    const { outputText } = ts.transpileModule(readFileSync(fileUrl, 'utf8'), {
        compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    });
    const js = outputText.replace(/(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])([^'"]+)\2/g, (whole, lead, _quote, specifier) => {
        if (specifier.startsWith('.')) {
            const target = new URL(specifier.endsWith('.ts') ? specifier : `${specifier}.ts`, fileUrl);
            return lead + JSON.stringify(dataUrlOf(target));
        }
        if (specifier === '@nfdi4plants/arctrl') return lead + JSON.stringify(import.meta.resolve(specifier));
        return whole;
    });

    const url = `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`;
    dataUrls.set(fileUrl.href, url);
    return url;
}

/** Imports a TypeScript source module. The path is relative to this tests folder. */
export function importTs(relativePath) {
    return import(dataUrlOf(new URL(relativePath, import.meta.url)));
}
