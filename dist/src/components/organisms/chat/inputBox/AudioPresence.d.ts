/// <reference types="react" />
interface Props {
    type: 'client' | 'server';
    height: number;
    width: number;
    barCount: number;
    barSpacing: number;
}
export default function AudioPresence({ type, height, width, barCount, barSpacing }: Props): JSX.Element;
export { AudioPresence };
