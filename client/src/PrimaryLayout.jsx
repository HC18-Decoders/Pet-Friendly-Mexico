import React from 'react';
import { Switch, Route } from 'react-router-dom';

//SubLayouts
import Home from "./pages/Home.jsx";
import VetProfile from "./pages/VetProfile.jsx";
//import PetProfile from "./components/home/PetProfile.jsx";
import Header from "./home/Header.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <div>
      <Header />
    </div>
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}VetProfile`} component={VetProfile} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
