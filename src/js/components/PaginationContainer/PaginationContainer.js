// @flow
import { connect } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import { getSearchResults } from '../../reducers/search';

export const mapStateToProps = (state: Object) => ({
  number: state.articles.articles.meta.offset / 10,
  totalElements: state.articles.articles.meta.hits,
  request: state.articles.request,
  sort: state.articles.sort
});

export const mapDispatchToProps = (dispatch: Function) => ({
  onChange(request: string, sort: string, page: number) {
    dispatch(
      getSearchResults(request, sort, page)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);

