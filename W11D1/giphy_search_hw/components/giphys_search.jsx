import React from 'react';

import GiphysIndex from './giphys_index';

class GiphySearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'siberian husky'
    }
  }

  componentDidMount() {

  }

  handleChange(e) {

  }

  handleSubmit(e) {

  }

  render() {
    <div>
      {/* <form className="search-bar"> */}
          {/* <input value={this.state.searchTerm} onChange={this.handleChange}/> */}
          {/* <button type="submit" onClick={this.handleSubmit}>Search for Giphy</button> */}
      {/* </form> */}
      Hello
    </div>
  }
}

export default GiphySearch