import { IAction } from '@chainlit/react-client';
interface ActionProps {
    action: IAction;
    margin: number | string;
    onClick?: () => void;
}
declare const ActionButton: ({ action, margin, onClick }: ActionProps) => JSX.Element;
export { ActionButton };
