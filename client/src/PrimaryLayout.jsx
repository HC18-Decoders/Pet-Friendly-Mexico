import React from 'react';
import { Switch, Route } from 'react-router-dom';
//SubLayouts
import Home from "./pages/Home.jsx"
import VetProfile from "./pages/VetProfile.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}vetProfiles`} component={VetProfile} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
