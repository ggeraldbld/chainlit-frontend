import { IMessageElement } from '@chainlit/react-client';
interface ElementProps {
    element?: IMessageElement;
}
declare const Element: ({ element }: ElementProps) => JSX.Element | null;
export { Element };
