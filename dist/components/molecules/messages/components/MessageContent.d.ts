import { IMessageElement, IStep } from '@chainlit/react-client';
export interface Props {
    elements: IMessageElement[];
    message: IStep;
    preserveSize?: boolean;
    allowHtml?: boolean;
    latex?: boolean;
}
declare const MessageContent: import('../../../../../node_modules/react').MemoExoticComponent<({ message, elements, preserveSize, allowHtml, latex }: Props) => JSX.Element>;
export { MessageContent };
