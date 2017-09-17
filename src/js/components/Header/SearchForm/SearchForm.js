// @flow
import React from 'react';
import { connect } from 'react-redux';
import './SearchForm.less';
import { getSearchResults } from '../../../reducers/search';


export const mapDispatchToProps = (dispatch: Function) => ({
  handleClick(value: string) {
    dispatch(
      getSearchResults(value)
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

  handleChange(e: Event) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick() {
    this.props.handleClick(this.state.value);
  }

  render() {
    return (
      <div className="searchForm">
        <input className="input" type="search" onChange={this.handleChange} />
        <button className="searchButton" onClick={this.handleClick}>
          <i className="fa fa-search searchIcon" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(SearchForm);
