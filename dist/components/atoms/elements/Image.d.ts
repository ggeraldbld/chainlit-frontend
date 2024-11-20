import { IImageElement } from '@chainlit/react-client';
interface Props {
    element: IImageElement;
}
declare const ImageElement: ({ element }: Props) => JSX.Element | null;
declare const Image: ({ element }: Props) => JSX.Element | null;
export { ImageElement, Image };
