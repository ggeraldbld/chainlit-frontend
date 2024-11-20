import { IInput } from 'types/Input';
import { SliderInputProps } from './SliderInput';
import { SwitchInputProps } from './SwitchInput';
import { TagsInputProps } from './TagsInput';
import { TextInputProps } from './TextInput';
import { SelectInputProps } from './selects/SelectInput';
type TFormInputValue = string | number | boolean | string[] | undefined;
interface IFormInput<T, V extends TFormInputValue> extends IInput {
    type: T;
    value?: V;
    initial?: V;
    setField?(field: string, value: V, shouldValidate?: boolean): void;
}
type TFormInput = (Omit<SwitchInputProps, 'checked'> & IFormInput<'switch', boolean>) | (Omit<SliderInputProps, 'value'> & IFormInput<'slider', number>) | (Omit<TagsInputProps, 'value'> & IFormInput<'tags', string[]>) | (Omit<SelectInputProps, 'value'> & IFormInput<'select', string>) | (Omit<TextInputProps, 'value'> & IFormInput<'textinput', string>) | (Omit<TextInputProps, 'value'> & IFormInput<'numberinput', number>);
declare const FormInput: ({ element }: {
    element: TFormInput;
}) => JSX.Element;
export { FormInput };
export type { IFormInput, TFormInput, TFormInputValue };
