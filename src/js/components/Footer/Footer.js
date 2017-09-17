// @flow
import React from 'react';
import { connect } from 'react-redux';
import './Footer.less';
import PaginationContainer from '../PaginationContainer/PaginationContainer';

const mapStateToProps = state => ({
  // articles: state.articles.articles.docs,
  totalElements: state.articles.articles.meta
});

const Footer = (props: {totalElements: any }) => (
  <footer>
    {(props.totalElements && props.totalElements.hits > 10) && <PaginationContainer />}
  </footer>
);

export default connect(mapStateToProps)(Footer);
