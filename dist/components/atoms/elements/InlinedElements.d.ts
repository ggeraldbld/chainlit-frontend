import { IMessageElement } from '@chainlit/react-client';
interface Props {
    elements: IMessageElement[];
}
declare const InlinedElements: ({ elements }: Props) => JSX.Element | null;
export { InlinedElements };
