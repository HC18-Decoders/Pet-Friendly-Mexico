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
    Search   <input className="serch-button"></input>
  </div>
);
}
}

export default Search;
