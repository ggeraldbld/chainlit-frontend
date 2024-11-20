import { IAction, IMessageElement, IStep } from '@chainlit/react-client';
import { IMessageContext } from 'types/messageContext';
interface Props {
    actions: IAction[];
    context: IMessageContext;
    elements: IMessageElement[];
    messages: IStep[];
}
declare const MessageContainer: import('../../../../node_modules/react').MemoExoticComponent<({ actions, context, elements, messages }: Props) => JSX.Element>;
export { MessageContainer };
