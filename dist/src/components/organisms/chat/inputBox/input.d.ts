import { FileSpec } from '@chainlit/react-client';
import { IAttachment } from 'state/chat';
interface Props {
    fileSpec: FileSpec;
    onFileUpload: (payload: File[]) => void;
    onFileUploadError: (error: string) => void;
    onSubmit: (message: string, attachments?: IAttachment[]) => void;
    onReply: (message: string) => void;
}
declare const Input: import('../../../../../node_modules/react').MemoExoticComponent<({ fileSpec, onFileUpload, onFileUploadError, onSubmit, onReply }: Props) => JSX.Element>;
export default Input;
