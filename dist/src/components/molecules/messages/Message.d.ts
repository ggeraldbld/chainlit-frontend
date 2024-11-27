import { IAction, IMessageElement, IStep } from '@chainlit/react-client';
interface Props {
    message: IStep;
    elements: IMessageElement[];
    actions: IAction[];
    indent: number;
    isRunning?: boolean;
    isScorable?: boolean;
    scorableRun?: IStep;
}
declare const Message: import('../../../../node_modules/react').MemoExoticComponent<({ message, elements, actions, isRunning, indent, isScorable, scorableRun }: Props) => JSX.Element | null>;
export { Message };
