// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SortContainer.less';
import { getSearchResults } from '../../reducers/search';

export const mapStateToProps = (state: Object) => ({
  sort: state.articles.sort,
  request: state.articles.request
});

export const mapDispatchToProps = (dispatch: Function) => ({
  onClick(request: string, sort: string) {
    dispatch(
      getSearchResults(request, sort, 0)
    );
  }
});

class SortContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      sort: this.props.sort
    };

    (this: Object).handleClick = this.handleClick.bind(this);
  }

  state: {
    sort: string
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      sort: nextProps.sort
    });
  }

  props: {
    sort: string,
    request: string,
    onClick: Function
  };

  handleClick(sort) {
    this.setState({
      sort
    });
    return this.props.onClick(this.props.request, sort);
  }

  render() {
    return (
      <div className="sort">
        <span>Sort by: </span>
        <Link
          className={`${this.state.sort === 'newest' ? 'active' : ''}`}
          to={`/search?request=${this.props.request}&sort=newest&page=1`}
          onClick={() => this.handleClick('newest')}
        >Newest</Link>
        <span className="separate">|</span>
        <Link
          className={`${this.state.sort === 'oldest' ? 'active' : ''}`}
          to={`/search?request=${this.props.request}&sort=oldest&page=1`}
          onClick={() => this.handleClick('oldest')}
        >Oldest</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);
