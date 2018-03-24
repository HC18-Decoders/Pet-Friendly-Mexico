import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './home/Header.jsx';
import Search from './home/Search.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Header />
        <footer className="foo">Hi! What are you looking for?</footer>
      </div>
)}
};


ReactDOM.render(<App />, document.getElementById('app'));
