import { IconButtonProps } from '../../../../node_modules/@mui/material/IconButton';
interface Props extends IconButtonProps {
    progress: number;
    children: React.ReactNode;
}
export default function CircularProgressIconButton({ progress, children, ...iconButtonProps }: Props): JSX.Element;
declare const progressIconButton: typeof CircularProgressIconButton;
export { progressIconButton };
