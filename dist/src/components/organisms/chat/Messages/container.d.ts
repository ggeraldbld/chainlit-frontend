import { IAction, IAsk, IFeedback, IMessageElement, IStep } from '@chainlit/react-client';
interface Props {
    loading: boolean;
    actions: IAction[];
    elements: IMessageElement[];
    messages: IStep[];
    askUser?: IAsk;
    onFeedbackUpdated: (message: IStep, onSuccess: () => void, feedback: IFeedback) => void;
    onFeedbackDeleted: (message: IStep, onSuccess: () => void, feedback: string) => void;
    callAction?: (action: IAction) => void;
}
declare const MessageContainer: import('../../../../../node_modules/react').MemoExoticComponent<({ askUser, loading, actions, elements, messages, onFeedbackUpdated, onFeedbackDeleted, callAction }: Props) => JSX.Element>;
export { MessageContainer as container };
export default MessageContainer;
