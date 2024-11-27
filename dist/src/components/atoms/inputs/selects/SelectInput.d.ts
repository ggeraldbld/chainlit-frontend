import { MouseEvent } from '../../../../../node_modules/react';
import { SxProps } from '../../../../../node_modules/@mui/material';
import { SelectChangeEvent, SelectProps } from '../../../../../node_modules/@mui/material/Select';
import { IInput } from 'types/Input';
type SelectItem = {
    label: string;
    icon?: JSX.Element;
    notificationCount?: number;
    value: string | number;
};
type SelectInputProps = IInput & Omit<SelectProps<string>, 'value' | 'onChange'> & {
    children?: React.ReactNode;
    items?: SelectItem[];
    name?: string;
    onChange: (e: SelectChangeEvent) => void;
    placeholder?: string;
    renderLabel?: () => string;
    onItemMouseEnter?: (e: MouseEvent<HTMLLIElement>, itemName: string) => void;
    onItemMouseLeave?: (e: MouseEvent<HTMLLIElement>) => void;
    value?: string | number;
    iconSx?: SxProps;
};
declare const SelectInput: ({ children, description, disabled, hasError, id, items, label, name, onChange, onItemMouseEnter, onItemMouseLeave, size, tooltip, value, placeholder, renderLabel, onClose, sx, iconSx, ...rest }: SelectInputProps) => JSX.Element;
export { SelectInput };
export type { SelectItem, SelectInputProps };
