import { ChainlitAPI } from '@chainlit/react-client';

export type TAppProps = {
  apiClient: ChainlitAPI;
};
declare const App: ({ apiClient }: TAppProps) => JSX.Element;
export declare const bootstrap: import('single-spa').LifeCycleFn<TAppProps>,
  mount: import('single-spa').LifeCycleFn<TAppProps>,
  unmount: import('single-spa').LifeCycleFn<TAppProps>;
export default App;
