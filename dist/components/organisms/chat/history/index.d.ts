/// <reference types="react" />
interface Props {
    disabled?: boolean;
    onClick: (content: string) => void;
}
export default function InputHistoryButton({ onClick }: Props): JSX.Element;
export {};
