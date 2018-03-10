import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleSearch(event) {
  this.props.searchYelp(this.state.term);

  event.preventDefault();
}

  render () {
    return (
      <div className="SearchBar">
  		  <div className="SearchBar-fields">
  		    <input placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}/>
  		  </div>
  		  <div>
  		    <a onClick={this.handleSearch}>SEARCH</a>
  		  </div>
  		</div>
    );
  }
}

export default SearchBar;
