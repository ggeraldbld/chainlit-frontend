import { MenuItemProps as MMenuItemProps } from '../../../../../node_modules/@mui/material/MenuItem';
import { SelectItem } from './SelectInput';
interface MenuItemProps extends MMenuItemProps {
    isDarkMode: boolean;
    item: SelectItem;
    selected: boolean;
    value: string | number;
}
declare const MenuItem: ({ item, value, selected, isDarkMode, icon, ...props }: MenuItemProps & {
    icon?: JSX.Element | undefined;
}) => JSX.Element;
export { MenuItem };
