import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

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
  <Router>
  <MuiThemeProvider>
    <div>
  <AppBar className="appBar"
    style={{backgroundColor: darkBlack}}
    title={<span style={styles.title}>Pet's Mexico</span>}
    iconElementRight={<FlatButton className="signUp" label="Sign Up" style={styles.button} />}
        />
</div>
<div>
    <Link to="/">Home</Link>
</div>
  </MuiThemeProvider>
</Router>
);

export default Header;
