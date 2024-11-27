/// <reference types="react" />
type Props = {
    open: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
};
export default function NewChatDialog({ open, handleClose, handleConfirm }: Props): JSX.Element;
export { NewChatDialog as newChatDialog };
