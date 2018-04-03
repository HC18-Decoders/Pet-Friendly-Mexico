import React from 'react';
import axios from 'axios';

export default class VetProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vet: []
    };
    this.getVet = this.getVet.bind(this);
  }

  ComponentDidMount() {
    this.getVetProfile();
  }

  getVet() {
    axios.get('/vetProfiles')
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="vet-sublayout">
        <div className="vet-content">
        <Switch>
          <Route exact path={this.props.match.path}
            render={(props) => <VetLayout {...props} data={this.state} /> } />
        </Switch>
        </div>
      </div>
    )
  }
};
