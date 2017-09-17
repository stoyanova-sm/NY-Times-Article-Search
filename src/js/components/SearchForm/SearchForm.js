// @flow
import React from 'react';
import { connect } from 'react-redux';
import './SearchForm.less';
import { getSearchResults } from '../../reducers/search';

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

  handleChange(e: SyntheticInputEvent) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e: Event) {
    e.preventDefault();
    this.props.handleClick(this.state.value);
   // history.push('/?search')
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.handleClick}>
        <input className="input" type="search" onChange={this.handleChange} />
        <button type="submit" className="searchButton">
          <i className="fa fa-search searchIcon" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(SearchForm);
