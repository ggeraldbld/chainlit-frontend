import { Component, ErrorInfo, ReactNode } from '../../../node_modules/react';
interface Props {
    prefix?: string;
    children?: ReactNode;
}
interface State {
    hasError: boolean;
    error?: string;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(err: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | import('../../../node_modules/react').ReactFragment | JSX.Element | null | undefined;
}
export { ErrorBoundary };
