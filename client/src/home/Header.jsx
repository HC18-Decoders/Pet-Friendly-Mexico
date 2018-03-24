import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';

const styles = {
  title: {
    fontFamily: 'Lato',
    color: white,
    cursor: 'pointer'
  },

  button: {
    color: white,
    fontFamily: 'Lato',
    fontSize: '36px'
  }

};

const Header = () => (
  <MuiThemeProvider>
  <AppBar className="appBar"
    style={{backgroundColor: darkBlack}}
    title={<span style={styles.title}>Pet's Mexico</span>}
    iconElementRight={<FlatButton className="signUp" label="Sign Up" style={styles.button} />}
  />
    <h1>すべての死体は死にきれているわけではない。人々はそれらを殺し、そしてまた起き上がってころす。</h1>
  </MuiThemeProvider>
);

export default Header;
