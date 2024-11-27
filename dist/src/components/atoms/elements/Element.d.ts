import { IMessageElement } from '../../../../libs/react-client/src';
interface ElementProps {
    element?: IMessageElement;
}
declare const Element: ({ element }: ElementProps) => JSX.Element | null;
export { Element };
