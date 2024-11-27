import { FileSpec } from '@chainlit/react-client';
type Props = {
    disabled?: boolean;
    fileSpec: FileSpec;
    onFileUpload: (files: File[]) => void;
    onFileUploadError: (error: string) => void;
};
declare const UploadButton: ({ disabled, fileSpec, onFileUpload, onFileUploadError }: Props) => JSX.Element | null;
export default UploadButton;
