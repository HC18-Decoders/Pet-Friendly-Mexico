import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import {darkBlack, white} from 'material-ui/styles/colors';
import firebase from 'firebase';
import {provider, auth} from '../config/client.js';
import runtimeGenerator from 'regenerator-runtime/runtime';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.login=this.login.bind(this)
    this.logout=this.logout.bind(this)
  }
  async login() {
    const result = await auth().signInWithPopup(provider)
    this.setState({user: result.user});
  }

  async logout() {
  await auth().signOut()
   this.setState({user: null});
 }

 async componentWillMount() {
   const user = await auth.onAuthStateChanged();
   if (user) {
     this.setState({user})
 }
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
            <FlatButton className="login" onClick={this.login} label="Login with Facebook" style={{right: -705, color: white}} />
            <FlatButton className="logOut" onClick={this.logout} label="Logout" style={{left: 680, color: white}} />
          </ToolbarGroup>
        </Toolbar>
  );
}
}
