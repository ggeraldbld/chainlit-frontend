import { IInput } from 'types/Input';
type SwitchInputProps = IInput & {
    checked: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    onChange: (event?: React.ChangeEvent<HTMLInputElement>, checked?: boolean) => void;
};
declare const SwitchInput: (props: SwitchInputProps) => JSX.Element;
export { SwitchInput };
export type { SwitchInputProps };
