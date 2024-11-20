import { IconButtonProps } from '../../../node_modules/@mui/material/IconButton';
interface ClipboardCopyProps {
    value: string;
    theme?: 'dark' | 'light';
    edge?: IconButtonProps['edge'];
}
declare const ClipboardCopy: ({ value, edge }: ClipboardCopyProps) => JSX.Element;
export { ClipboardCopy };
