import { ReactElement } from '../../../../node_modules/react';
interface AuthResetPasswordProps {
    callbackUrl: string;
    onResetPassword: (email: string, token: string, callbackUrl: string) => Promise<any>;
    renderLogo?: ReactElement;
    title: string;
    token: string;
}
declare const AuthResetPassword: ({ callbackUrl, onResetPassword, renderLogo, title, token }: AuthResetPasswordProps) => JSX.Element;
export { AuthResetPassword };
