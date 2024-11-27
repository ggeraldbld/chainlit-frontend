import { ButtonProps } from '../../../../node_modules/@mui/material';
interface Props extends ButtonProps {
}
export default function GithubButton({ ...props }: Props): JSX.Element | null;
declare const githubButton: typeof GithubButton;
export { githubButton };
