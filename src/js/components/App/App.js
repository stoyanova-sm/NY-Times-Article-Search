import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import configureStore from '../../configs/configureStore';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Header />
      <ArticlesContainer />
    </div>
  </Provider>
);
export default App;
