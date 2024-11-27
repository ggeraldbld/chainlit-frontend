import { IImageElement, IVideoElement } from '@chainlit/react-client';
declare const ListWithSize: <T extends IImageElement | IVideoElement>({ elements, renderElement: Renderer }: {
    elements: T[];
    renderElement: ({ element }: {
        element: T;
    }) => JSX.Element | null;
}) => JSX.Element;
export { ListWithSize };
