import { IStep } from '@chainlit/react-client';
interface Props {
    debugUrl: string;
    step: IStep;
}
declare const DebugButton: ({ step, debugUrl }: Props) => JSX.Element;
export { DebugButton };
