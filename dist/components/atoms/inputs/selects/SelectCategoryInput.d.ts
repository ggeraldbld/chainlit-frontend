import { SelectInputProps, SelectItem } from './SelectInput';
type CategoryItem = {
    header: string;
    items: SelectItem[];
};
type SelectCategoryProps = {
    items: CategoryItem[];
} & Omit<SelectInputProps, 'items'>;
declare const SelectCategoryInput: ({ items, value, ...rest }: SelectCategoryProps) => JSX.Element;
export { SelectCategoryInput };
