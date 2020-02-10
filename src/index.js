import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { AppWithNavigationState, store } from './store';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

if (__DEV__) {
  App = console.tron.overlay(App);
}

export default App;
