interface ProviderButtonProps {
    provider: string;
    onClick: () => void;
    isSignIn?: boolean;
}
declare const ProviderButton: ({ provider, onClick, isSignIn }: ProviderButtonProps) => JSX.Element;
export { ProviderButton };
