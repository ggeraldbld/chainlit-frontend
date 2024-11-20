import { PropsWithChildren } from '../../../../node_modules/react';
import { IStep } from '@chainlit/react-client';
interface Props {
    step: IStep;
    isRunning?: boolean;
}
export default function Step({ step, children, isRunning }: PropsWithChildren<Props>): JSX.Element;
export { Step };
