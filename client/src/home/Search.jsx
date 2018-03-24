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
    <h1>すべての死体は死にきれているわけではない。人々はそれらを殺し、そしてまた起き上がってころす。</h1>
    Search   <input></input>
  </div>
);
}
}

export default Search;
