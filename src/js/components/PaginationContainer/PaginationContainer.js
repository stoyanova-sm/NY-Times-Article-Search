// @flow
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { getSearchResults } from '../../reducers/search';

export const mapStateToProps = (state: Object) => ({
  number: state.articles.articles.meta.offset / 10,
  totalElements: state.articles.articles.meta.hits,
  request: state.articles.request
});

export const mapDispatchToProps = (dispatch: Function) => ({
  onChange(request: string, page: number) {
    dispatch(
      getSearchResults(request, page)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

