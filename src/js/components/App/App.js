import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import configureStore from '../../configs/configureStore';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Header />
      <div className="content">
        <SearchForm />
        <ArticlesContainer />
      </div>
      <Footer />
    </div>
  </Provider>
);
export default App;
