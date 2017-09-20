// @flow
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';

const mapStateToProps = (state: Object) => ({
  number: state.articles.articles.meta.offset / 10,
  totalElements: state.articles.articles.meta.hits,
  request: state.articles.request,
  sort: state.articles.sort
});

export default connect(mapStateToProps)(Pagination);

