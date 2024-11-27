import { IAction, IStep } from '@chainlit/react-client';
interface Props {
    message: IStep;
    actions: IAction[];
}
declare const MessageActions: ({ message, actions }: Props) => JSX.Element | null;
export { MessageActions };
