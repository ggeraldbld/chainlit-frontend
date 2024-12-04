import { ChainlitAPI } from '@chainlit/react-client';

import { settingsState } from 'state/settings';

export type TAppProps = {
  apiClient: ChainlitAPI;
};
interface TCustomEvent extends Event {
  detail?: any;
}
export type TStateEvents = {
  CustomEvent: TCustomEvent;
  Settings: typeof settingsState;
};
export declare const stateEventsKey: {
  settingsRead: string;
  settingsUpdate: string;
};
declare const App: ({ apiClient }: TAppProps) => JSX.Element;
export declare const bootstrap: import('single-spa').LifeCycleFn<TAppProps>,
  mount: import('single-spa').LifeCycleFn<TAppProps>,
  unmount: import('single-spa').LifeCycleFn<TAppProps>;
export default App;
