import { IInput } from 'types/Input';
interface ToggleProps extends IInput {
    items: string[];
    onChange: (newValue: string) => void;
    value: string;
}
declare const Toggle: (props: ToggleProps) => JSX.Element;
export { Toggle };
