// @flow
import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import './SearchForm.less';
import { history } from '../../configs/configureStore';

const mapStateToProps = (state: Object) => ({
  routeLocation: state.routing.location
});

class SearchForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      request: queryString.parse(this.props.routeLocation.search).request
    };

    (this: Object).handleChange = this.handleChange.bind(this);
    (this: Object).handleClick = this.handleClick.bind(this);
  }

  state: {
    value: string,
    request: string
  };

  props: {
    routeLocation: Object
  };

  handleChange(e: SyntheticInputEvent) {
    this.setState({
      value: e.target.value

    });
  }

  handleClick(e: Event) {
    e.preventDefault();
    history.push(`/search?request=${this.state.value}&sort=newest&page=1`);
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleClick}>
        <input id="input" className="input" type="search" defaultValue={this.state.request} onChange={this.handleChange} />
        <button type="submit" className="searchButton" disabled={this.state.value === ''}>
          <i className="fa fa-search searchIcon" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(SearchForm);
