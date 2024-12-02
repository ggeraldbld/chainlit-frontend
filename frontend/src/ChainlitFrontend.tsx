import AppWrapper from 'AppWrapper';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import singleSpaReact from 'single-spa-react';

import { ChainlitAPI, ChainlitContext } from '@chainlit/react-client';

import { settingsState } from 'state/settings';

import './index.css';

import { i18nSetupLocalization } from './i18n';

i18nSetupLocalization();

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

export const stateEventsKey = {
  settingsRead: 'events.settings.read',
  settingsUpdate: 'events.settings.update'
};

const StateSyncViaEvents = () => {
  const [settings, setSettings] = useRecoilState(settingsState);

  useEffect(() => {
    const handleCounterUpdate = (event: TCustomEvent) => {
      setSettings(event.detail);
    };

    window.addEventListener(
      stateEventsKey.settingsUpdate,
      handleCounterUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        stateEventsKey.settingsUpdate,
        handleCounterUpdate as EventListener
      );
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(stateEventsKey.settingsRead, {
        detail: settings
      })
    );
  }, [settings]);

  return null;
};

const App = ({ apiClient }: TAppProps) => {
  return (
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <AppWrapper />
        <StateSyncViaEvents />
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
