import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import Header from './Header';
import ImageGrid from './ImageGrid';

import { configureStore } from '../store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <ImageGrid />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
