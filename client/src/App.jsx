import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './home/Header.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
)}
};


ReactDOM.render(<App />, document.getElementById('app'));
