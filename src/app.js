import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './components/header';
import Main from './components/main';

const App = () => (
  <>
    <Header />
    <Main />
  </>
);

export default hot(App);
