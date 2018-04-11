import React from 'react';
import axios from 'axios';
import Header from '../home/Header.jsx';
import { Switch, Route } from 'react-router-dom';
import ResultsLayout from "./ResultsLayout.jsx"


export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vets: []
    }
    this.getVetProfiles = this.getVetProfiles.bind(this);
  }

  componentDidMount() {
    this.getVetProfiles();
  }

  getVetProfiles() {
    axios.get('/results')
      .then(data => {
        this.setState({vets: data.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="vet-sublayout">
        <div className="vet-content">
          <div>
            <Header />
          </div>
            <Switch>
              <Route exact path={this.props.match.path}
                render={(props) => <ResultsLayout {...props} vets={this.state.vets} /> } />
              <Route path={`${this.props.match.path}/:id`}
                render={(props) => <Profile {...props} vets={this.state.vets} /> } />
            </Switch>
          </div>
        </div>
    )
  }
};
