/// <reference types="react" />
interface Props {
    setAutoScroll?: (autoScroll: boolean) => void;
    autoScroll?: boolean;
    children: React.ReactNode;
}
export default function ScrollContainer({ setAutoScroll, autoScroll, children }: Props): JSX.Element;
export { ScrollContainer };
