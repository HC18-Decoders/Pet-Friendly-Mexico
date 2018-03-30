import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Toolbar style={{backgroundColor:darkBlack}}>
          <ToolbarGroup>
            <ToolbarTitle text="Pet's Mexico" style={{color:white}}/>
            <ToolbarSeparator />
            <RaisedButton label="Log In" style={{right: -895}} />
            <RaisedButton label="Sign Up" style={{left: 630}} />
          </ToolbarGroup>
        </Toolbar>
  );
}
}
