import { NotificationCountProps } from 'types/NotificationCount';
type InputLabelProps = {
    id?: string;
    label: string | number;
    tooltip?: string;
    notificationsProps?: NotificationCountProps;
};
declare const InputLabel: ({ id, label, tooltip, notificationsProps }: InputLabelProps) => JSX.Element;
export { InputLabel };
