import React from 'react';
import { Switch, Route } from 'react-router-dom';
//SubLayouts
import Home from "./pages/Home.jsx"
//import Header from "./home/Header.jsx"
import SearchResults from "./pages/SearchResults.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}searchresults`} component={SearchResults} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
