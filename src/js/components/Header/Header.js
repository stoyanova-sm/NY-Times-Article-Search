import React from 'react';
import './Header.less';
import SearchForm from './SearchForm/SearchForm';

const Header = () => (
  <header>
    <h1>Search Articles from The New York Times</h1>
    <SearchForm />
  </header>
);

export default Header;
