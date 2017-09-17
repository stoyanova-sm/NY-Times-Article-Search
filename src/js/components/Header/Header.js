import React from 'react';
import './Header.less';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => (
  <header>
    <div>
      <img src="http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_30a.png" alt="" />
      <h1>Article Search</h1>
    </div>
    <h3>Explore The New York Times</h3>
  </header>
);

export default Header;
