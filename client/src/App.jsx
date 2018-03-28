import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider';
import {getMuiTheme} from 'material-ui/styles/getMuiTheme';

import PrimaryLayout from "./PrimaryLayout.jsx";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Route path="/" component={PrimaryLayout} />
        </MuiThemeProvider>
      </BrowserRouter>
)}
};


ReactDOM.render(<App />, document.getElementById('app'));
