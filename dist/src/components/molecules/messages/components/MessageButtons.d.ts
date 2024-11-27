import { IStep } from '@chainlit/react-client';
interface Props {
    message: IStep;
    run?: IStep;
}
declare const MessageButtons: ({ message, run }: Props) => JSX.Element | null;
export { MessageButtons };
