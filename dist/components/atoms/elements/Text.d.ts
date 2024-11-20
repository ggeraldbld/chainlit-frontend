import { ITextElement } from '@chainlit/react-client';
interface Props {
    element: ITextElement;
}
declare const TextElement: ({ element }: Props) => JSX.Element;
declare const Text: ({ element }: Props) => JSX.Element;
export { TextElement, Text };
