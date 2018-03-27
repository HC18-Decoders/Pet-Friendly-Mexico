import React from "react";

import Header from '../home/Header.jsx';
import Search from '../home/Search.jsx';








export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Search />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <footer className="foo">Hi! What are you looking for?</footer>
        </div>
      </div>
    );
  }
}
