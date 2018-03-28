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
    Búsqueda   <input className="serch-button"></input>
  <button>Go!</button>
  </div>
);
}
}

export default Search;
