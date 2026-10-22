import { Component, type ErrorInfo, type ReactNode } from "react";
import { errorMessage } from "./errorMessage";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: (message: string) => ReactNode;
    // A new resetKey clears the error, so the children get another try.
    resetKey?: string;
}

interface ErrorBoundaryState {
    // The message of the error, or null while the children render.
    message: string | null;
    // The resetKey of the props at the last render.
    seenResetKey: string | undefined;
}

// Catches the errors that the children throw while rendering and shows the fallback in their place.
// An error boundary has to be a class, because React has no hook for it. The boundary does not catch
// errors in its own parent.
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { message: null, seenResetKey: this.props.resetKey };

    // Anything can be thrown, a string for example, so the state keeps the text of the error.
    static getDerivedStateFromError(error: unknown): Partial<ErrorBoundaryState> {
        return { message: errorMessage(error) };
    }

    static getDerivedStateFromProps(
        props: ErrorBoundaryProps,
        state: ErrorBoundaryState,
    ): Partial<ErrorBoundaryState> | null {
        return props.resetKey === state.seenResetKey ? null : { message: null, seenResetKey: props.resetKey };
    }

    componentDidCatch(error: unknown, info: ErrorInfo) {
        console.error("The error boundary caught an error", error, info);
    }

    render() {
        return this.state.message === null ? this.props.children : this.props.fallback(this.state.message);
    }
}
