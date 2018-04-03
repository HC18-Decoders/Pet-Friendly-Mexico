import React from 'react';
import {darkBlack, white} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: []
    }

  }
handleClick() {
  alert('Thank you for clicking me!');
}

render(){
  return(
  <div className="serch">
    Búsqueda   <br></br><TextField className="serch-box" floatingLabelText="Escribe el nombre del lugar..." underlineStyle="white" fullLength={true} style={{color:darkBlack}} />
  <FlatButton onClick={(e) => this.handleClick(e)} label="Go!" className="serch-button" style={{color:darkBlack}} />
  </div>
);
}
}

export default Search;
