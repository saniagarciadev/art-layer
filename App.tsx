import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import 'expo-dev-client';
import React, {useCallback, useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Linking from 'expo-linking';
import {StatusBar} from 'expo-status-bar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {App} from '@app/navio';
import {
  configureDesignSystem,
  getNavigationTheme,
  getStatusBarBGColor,
  getStatusBarStyle,
} from '@app/utils/designSystem';
import {hydrateStores} from '@app/stores';
import {initServices} from '@app/services';
import {AppProvider} from '@app/utils/providers';
import {useAppearance} from '@app/utils/hooks';

LogBox.ignoreLogs([
  'Require',
  'Found screens with the same name nested inside one another.', // for navio in some cases
]);

export default (): JSX.Element => {
  useAppearance();
  const [ready, setReady] = useState(false);

  const start = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();

    await hydrateStores();
    configureDesignSystem();
    await initServices();

    setReady(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    start();
  }, [start]);

  if (!ready) return <></>;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppProvider>
        <StatusBar style={getStatusBarStyle()} backgroundColor={getStatusBarBGColor()} />
        <App
          navigationContainerProps={{
            theme: getNavigationTheme(),
            linking: {
              prefixes: [Linking.createURL('/')],
            },
          }}
        />
      </AppProvider>
    </GestureHandlerRootView>
  );
};
