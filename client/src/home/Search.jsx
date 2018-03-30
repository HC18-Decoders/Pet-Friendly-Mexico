import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: []
    }
  }

render(){
  return(
  <div className="serch">
    Search   <input className="serch-box"></input>
  <button id="serch-button" color="black">Go!</button>
  </div>
);
}
}

export default Search;
