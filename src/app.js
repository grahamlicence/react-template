import React from 'react';
import { hot } from 'react-hot-loader/root';

import Main from './layouts/main';
import GlobalStyle from './components/global';

const App = () => (
  <>
    <GlobalStyle />
    <Main />
  </>
);

export default hot(App);
