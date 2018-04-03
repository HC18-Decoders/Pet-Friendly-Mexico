import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick() {
    alert('This button was clicked');
  }

  render() {
    return(
      <Toolbar className= "toolBar" style={{backgroundColor:darkBlack}}>
          <ToolbarGroup>
            <ToolbarTitle text="Pet's Mexico" style={{color:white}}/>
            <ToolbarSeparator />
            <FlatButton className="login" onClick={(e) => this.handleClick(e)} label="Log In" style={{right: -805, color: white}} />
            <FlatButton className="signup" onClick={(e) => this.handleClick(e)} label="Sign Up" style={{left: 780, color: white}} />
          </ToolbarGroup>
        </Toolbar>
  );
}
}
