interface AuthForgotPasswordProps {
    onGoBack: () => void;
    onContinue: (value: string) => Promise<void>;
}
declare const AuthForgotPassword: ({ onGoBack, onContinue }: AuthForgotPasswordProps) => JSX.Element;
export { AuthForgotPassword };
