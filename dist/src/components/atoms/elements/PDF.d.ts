import { IPdfElement } from '@chainlit/react-client';
interface Props {
    element: IPdfElement;
}
declare const PDFElement: ({ element }: Props) => JSX.Element | null;
declare const PDF: ({ element }: Props) => JSX.Element | null;
export { PDFElement, PDF };
