import { TextFieldProps } from '../../../../node_modules/@mui/material/TextField';
import { IInput } from 'types/Input';
type TextInputProps = {
    value?: string;
    placeholder?: string;
    endAdornment?: React.ReactNode;
} & IInput & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & Pick<TextFieldProps, 'multiline'>;
declare const TextInput: ({ description, disabled, hasError, id, label, size, tooltip, multiline, endAdornment, ...rest }: TextInputProps) => JSX.Element;
export { TextInput };
export type { TextInputProps };
