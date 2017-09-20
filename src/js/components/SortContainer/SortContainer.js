// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SortContainer.less';

export const mapStateToProps = (state: Object) => ({
  sort: state.articles.sort,
  request: state.articles.request
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
    if (nextProps !== this.props) {
      this.setState({
        sort: nextProps.sort
      });
    }
  }

  props: {
    sort: string,
    request: string,
  };

  handleClick(sort) {
    this.setState({
      sort
    });
  }

  render() {
    return (
      <div className="sort">
        <span>Sort by: </span>
        <Link
          className={`${this.state.sort === 'newest' ? 'active' : ''}`}
          to={`/search?request=${encodeURIComponent(this.props.request)}&sort=newest&page=1`}
          onClick={() => this.handleClick('newest')}
        >Newest</Link>
        <span className="separate">|</span>
        <Link
          className={`${this.state.sort === 'oldest' ? 'active' : ''}`}
          to={`/search?request=${encodeURIComponent(this.props.request)}&sort=oldest&page=1`}
          onClick={() => this.handleClick('oldest')}
        >Oldest</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SortContainer);
