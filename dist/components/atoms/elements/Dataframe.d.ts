import { IDataframeElement } from '@chainlit/react-client';
interface Props {
    element: IDataframeElement;
}
declare const DataframeElement: ({ element }: Props) => JSX.Element;
declare const Dataframe: ({ element }: Props) => JSX.Element;
export { DataframeElement, Dataframe };
