import { IThread } from '@chainlit/react-client';
type Props = {
    thread?: IThread;
    error?: Error;
    isLoading?: boolean;
};
declare const Thread: ({ thread, error, isLoading }: Props) => JSX.Element | null;
export { Thread };
