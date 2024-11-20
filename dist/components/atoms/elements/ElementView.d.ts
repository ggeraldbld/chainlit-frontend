import { IMessageElement } from '@chainlit/react-client';
import { Element } from './Element';
interface ElementViewProps {
    element: IMessageElement;
    onGoBack?: () => void;
}
declare const ElementView: ({ element, onGoBack }: ElementViewProps) => JSX.Element;
export { ElementView, Element };
