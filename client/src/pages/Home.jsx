import React from "react";
import firebase from 'firebase';
import {provider, auth} from '../config/client.js';
import Header from '../home/Header.jsx';
import Search from '../home/Search.jsx';
import runtimeGenerator from 'regenerator-runtime/runtime';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  async login() {
    const result = await auth().signInWithPopup(provide)
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


 render() {
   return (

     <div>
     <div>
        <p>{this.state.user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
        <button onClick={this.login.bind(this)}>
          Login with Facebook
        </button>
        <button onClick={this.logout.bind(this)}>
          Logout
        </button>
      </div>
       <div>
         <Header />
       </div>
       <div>
         <Search />
       </div>
       <div>
         <footer className="foo">¡Hola! ¿Qué estás buscando?</footer>
       </div>
     </div>
   );
 }
}
