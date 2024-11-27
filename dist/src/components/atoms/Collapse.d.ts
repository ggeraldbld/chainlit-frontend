/// <reference types="react" />
interface CollapseProps {
    children: React.ReactNode;
    defaultExpandAll?: boolean;
}
declare const Collapse: ({ children, defaultExpandAll }: CollapseProps) => JSX.Element;
export { Collapse };
