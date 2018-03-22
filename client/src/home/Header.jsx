import React from 'react';
import AppBar from 'material-ui/AppBar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';

const styles = {
  title: {
    fontFamily: 'Lato',
    color: white,
    cursor: 'pointer'
  }
};

const Header = () => (
  <MuiThemeProvider>
  <AppBar id="appBar"
    style={{backgroundColor: darkBlack}}
    title={<span style={styles.title}>Pet's Mexico</span>}
    iconElementRight={<FlatButton label="Sign Up" />}
  />
  </MuiThemeProvider>
);

export default Header;
