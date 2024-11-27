import { ThreadHistory } from '@chainlit/react-client';
interface Props {
    threadHistory?: ThreadHistory;
    error?: string;
    fetchThreads: () => void;
    isFetching: boolean;
    isLoadingMore: boolean;
}
declare const ThreadList: ({ threadHistory, error, fetchThreads, isFetching, isLoadingMore }: Props) => JSX.Element | null;
export { ThreadList };
