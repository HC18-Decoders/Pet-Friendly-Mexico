import React from "react";
import Header from '../home/Header.jsx';
import Search from '../home/Search.jsx';
import Services from './ServicesProfiles.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


 render() {
   return (
     <div>
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
