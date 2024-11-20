interface AuthVerifyEmailProps {
    email: string;
    onGoBack: () => void;
    onResend: (value: string) => Promise<void>;
}
declare const AuthVerifyEmail: ({ email, onGoBack, onResend }: AuthVerifyEmailProps) => JSX.Element;
export { AuthVerifyEmail };
