/// <reference types="react" />
interface AuthTemplateProps {
    children: React.ReactNode;
    renderLogo?: React.ReactElement;
    title?: React.ReactNode | string;
}
declare const AuthTemplate: ({ title, children, renderLogo }: AuthTemplateProps) => JSX.Element;
export { AuthTemplate };
