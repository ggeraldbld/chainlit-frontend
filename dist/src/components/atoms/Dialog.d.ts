import { ReactNode } from '../../../node_modules/react';
import { DialogProps as MDialogProps } from '../../../node_modules/@mui/material/Dialog';
type DialogProps = {
    actions?: ReactNode;
    content?: ReactNode;
    title?: ReactNode;
} & Omit<MDialogProps, 'content' | 'title'>;
declare const Dialog: ({ actions, content, title, ...rest }: DialogProps) => JSX.Element;
export { Dialog };
export default Dialog;
