import { default as React } from '../../../../node_modules/react';
import { RuleNames } from 'react-password-checklist';
type AuthLoginProps = {
    title: React.ReactNode | string;
    error?: string;
    providers: string[];
    callbackUrl: string;
    onPasswordSignIn?: (email: string, password: string, callbackUrl: string) => Promise<any>;
    onOAuthSignIn?: (provider: string, callbackUrl: string) => Promise<any>;
    onSignUp?: (email: string, password: string, callbackUrl: string) => Promise<any>;
    onForgotPassword?: () => Promise<any>;
    renderLogo?: React.ReactElement;
    passwordChecklistSettings?: {
        rules: RuleNames[];
        messages?: Partial<Record<RuleNames, string>>;
        minLength?: number;
        maxLength?: number;
    };
};
declare const AuthLogin: ({ title, error, providers, callbackUrl, onPasswordSignIn, onOAuthSignIn, onForgotPassword, onSignUp, renderLogo, passwordChecklistSettings }: AuthLoginProps) => JSX.Element;
export { AuthLogin };
