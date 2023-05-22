import React from 'react';
// import MainNavigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import MainNavigation from './src/navigation/navigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigation token={false} />
      </Provider>
    </>
  );
};

export default App;
