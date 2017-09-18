import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import './App.less';
import configureStore, { history } from '../../configs/configureStore';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="container">
        <Header />
        <Switch>
          <Route
            exact
            path="/search"
            component={() => (
              <div className="content">
                <SearchForm />
                <ArticlesContainer />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <div className="content">
                <SearchForm />
                <ArticlesContainer />

              </div>
            )}
          />
          <Route
            path="/"
            component={() => (
              <div className="notFound">
                404 Not found
              </div>
            )}
          />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);
export default App;
