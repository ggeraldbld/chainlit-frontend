import { FileSpec } from '@chainlit/react-client';
interface Props {
    fileSpec: FileSpec;
    onFileUpload: (payload: File[]) => void;
    onFileUploadError: (error: string) => void;
    setAutoScroll: (autoScroll: boolean) => void;
    autoScroll?: boolean;
}
declare const InputBox: import('../../../../../node_modules/react').MemoExoticComponent<({ fileSpec, onFileUpload, onFileUploadError, setAutoScroll, autoScroll }: Props) => JSX.Element>;
export default InputBox;
