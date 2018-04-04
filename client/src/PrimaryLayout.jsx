import React from 'react';
import { Switch, Route } from 'react-router-dom';
//SubLayouts
import Home from "./pages/Home.jsx"
import ServiceProfile from "./pages/ServiceProfile.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}serviceProfiles`} component={ServiceProfile} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
