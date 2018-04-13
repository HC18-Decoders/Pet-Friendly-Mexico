import React, { Component } from 'react'
import axios from 'axios';

import AddVetProfile from '../components/services/AddVetProfile.jsx';
import Header from '../home/Header.jsx';



export default class ServicesProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        vet: []
      }
      this.getVetProfiles = this.getVetProfiles.bind(this);
      this.postVetProfiles = this.postVetProfiles.bind(this);
    }

    componentDidMount() {
      this.getVetProfiles();
    }

    getVetProfiles(){
      axios.get('/serviceprofile')
        .then(data => {
          this.setState({vet: data[0]});
        })
      .catch(error => {
        console.log(error);
      });
    }

    postVetProfiles(firstName, lastName, phoneNumber, streetAddress, city, state, zipCode) {
      axios.post('/servicesprofile', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipCode: zipCode
      })
      .then(() => {
        this.getVetProfiles();
      })
    }


  render() {
    return (
      <div className="services-sublayout">
        <div>
          <Header />
        </div>
        <div>
          <h3 id="profile-text">Add your business here!</h3>
        </div>
        <div>
          <AddVetProfile postVetProfile={this.postVetProfile}/>
        </div>
      </div>
    )
  }
}
