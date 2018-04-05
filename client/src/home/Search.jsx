import React from 'react';
import { Link } from 'react-router-dom';

import {darkBlack, white} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchResults: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

}

  render(){
    return(
      <div className="search">
        Búsqueda   <br></br>
        <TextField className="search-box"
                   floatingLabelText="Escribe el nombre del lugar..."
                   underlineStyle="white"
                   fullLength={true}
                   style={{color:darkBlack}} />
                 <Link to="/searchresults"><FlatButton onClick={(e) => this.handleClick(e)}
                    label="Go!"
                    className="search-button"
                    style={{color:darkBlack}} />
                </Link>

      </div>
    );
  }
}

export default Search;
