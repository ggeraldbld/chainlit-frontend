import { SxProps } from '../../../../node_modules/@mui/material';
import { IInput } from 'types/Input';
type InputStateHandlerProps = {
    children: React.ReactNode;
    sx?: SxProps;
} & IInput;
declare const InputStateHandler: (props: InputStateHandlerProps) => JSX.Element;
export { InputStateHandler };
export type { InputStateHandlerProps };
