import { IMessageElement } from '@chainlit/react-client';
interface Props {
    allowHtml?: boolean;
    latex?: boolean;
    refElements?: IMessageElement[];
    children: string;
}
declare function Markdown({ refElements, allowHtml, latex, children }: Props): JSX.Element;
export { Markdown };
