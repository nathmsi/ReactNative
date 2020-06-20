import React from 'react';

import App from './src';


// redux
import { Provider as ReduxProvider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/store/reducers'


// Provider Theme 
import { Provider as ThemeProvider } from './src/contexts/ThemeColorContext';


export default () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  );
}

