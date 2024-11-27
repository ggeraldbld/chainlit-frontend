import { IAction, IMessageElement, IStep } from '@chainlit/react-client';
interface Props {
    messages: IStep[];
    elements: IMessageElement[];
    actions: IAction[];
    indent: number;
    isRunning?: boolean;
    scorableRun?: IStep;
}
declare const Messages: import('../../../../node_modules/react').MemoExoticComponent<({ messages, elements, actions, indent, isRunning, scorableRun }: Props) => JSX.Element>;
export { Messages };
