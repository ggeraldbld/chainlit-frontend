import { IInput } from 'types/Input';
type TagsInputProps = {
    placeholder?: string;
    value?: string[];
    setField?(field: string, value: string[], shouldValidate?: boolean): void;
} & IInput & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>;
declare const TagsInput: ({ description, hasError, id, label, size, tooltip, setField, ...rest }: TagsInputProps) => JSX.Element;
export { TagsInput };
export type { TagsInputProps };
