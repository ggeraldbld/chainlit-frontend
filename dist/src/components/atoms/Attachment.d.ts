/// <reference types="react" />
interface Props {
    name: string;
    mime: string;
    children?: React.ReactNode;
}
declare const Attachment: ({ name, mime, children }: Props) => JSX.Element;
export { Attachment };
