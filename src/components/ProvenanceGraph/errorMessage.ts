// JavaScript can throw anything, so a value without a message shows as its text.
export function errorMessage(value: unknown): string {
    const message = (value as { message?: unknown } | null | undefined)?.message;
    return typeof message === "string" && message !== "" ? message : String(value);
}
