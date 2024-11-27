import { IPlotlyElement } from '@chainlit/react-client';
interface Props {
    element: IPlotlyElement;
}
declare const PlotlyElement: (props: Props) => JSX.Element;
declare const Plotly: (props: Props) => JSX.Element;
export { PlotlyElement, Plotly };
