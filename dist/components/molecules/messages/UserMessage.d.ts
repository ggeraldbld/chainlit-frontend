import { IStep } from '@chainlit/react-client';
interface Props {
    message: IStep;
}
export default function UserMessage({ message, children }: React.PropsWithChildren<Props>): JSX.Element;
export { UserMessage };
