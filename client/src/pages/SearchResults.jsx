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
    };
    this.getVet = this.getVet.bind(this);
  }

  componentDidMount() {
    this.getVet();
  }

  getVet() {
    axios.get('/searchresults')
      .then(data => {
        this.setState({vet: data[0]});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="vet-sublayout">
        <div>
          <Header />
        </div>
        <div className="vet-content">
        <Switch>
          <Route exact path={this.props.match.path}
            render={(props) => <ResultsLayout {...props} data={this.state} /> } />
            <Route path={`${this.props.match.path}/:id`}
              render={(props) => <Profile {...props} data={this.state} /> } />
        </Switch>
        </div>
      </div>
    )
  }
};
