import { ButtonProps } from '../../../../node_modules/@mui/material/Button';
interface Props extends ButtonProps {
    component?: any;
    to?: any;
}
declare const RegularButton: ({ children, ...props }: Props) => JSX.Element;
export { RegularButton };
