import AppWrapper from 'AppWrapper';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import singleSpaReact from 'single-spa-react';

import { ChainlitAPI, ChainlitContext } from '@chainlit/react-client';

import './index.css';

import { i18nSetupLocalization } from './i18n';

i18nSetupLocalization();

export type TAppProps = {
  apiClient: ChainlitAPI;
};

const App = ({ apiClient }: TAppProps) => {
  return (
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </ChainlitContext.Provider>
  );
};

const lifecycles = singleSpaReact<TAppProps>({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary() {
    return <div>Something went wrong!</div>;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;

export default App;
