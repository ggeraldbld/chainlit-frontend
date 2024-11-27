import { SliderProps as MSliderProps } from '../../../../node_modules/@mui/material/Slider';
import { IInput } from 'types/Input';
type SliderInputProps = IInput & MSliderProps & {
    setField?(field: string, value: number, shouldValidate?: boolean): void;
};
declare const SliderInput: ({ description, hasError, id, label, tooltip, setField, ...sliderProps }: SliderInputProps) => JSX.Element;
export { SliderInput };
export type { SliderInputProps };
