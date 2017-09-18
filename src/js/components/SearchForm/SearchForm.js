// @flow
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import './SearchForm.less';
import { getSearchResults } from '../../reducers/search';
import { history } from '../../configs/configureStore';

const mapDispatchToProps = (dispatch: Function) => ({
  handleClick(value: string) {
    dispatch(
      getSearchResults(value, 0)
    );
  }
});

class SearchForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ''
    };

    (this: Object).handleChange = this.handleChange.bind(this);
    (this: Object).handleClick = this.handleClick.bind(this);
  }

  state: {
    value: string,
  };

  props: {
    handleClick: Function
  };

  handleChange(e: SyntheticInputEvent) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e: Event) {
    e.preventDefault();
    this.props.handleClick(this.state.value);
    history.push(`/search?request=${this.state.value}&page=1`);
  }

  render() {
    const request = queryString.parse(history.location.search).request;
    return (
      <form className="searchForm" onSubmit={this.handleClick}>
        <input className="input" type="search" defaultValue={request} onChange={this.handleChange} />
        <button type="submit" className="searchButton" disabled={this.state.value === ''}>
          <i className="fa fa-search searchIcon" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(SearchForm);
