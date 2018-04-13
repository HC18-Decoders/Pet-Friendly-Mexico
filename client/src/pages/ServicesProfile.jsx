import React, { Component } from 'react'
import axios from 'axios';

import {darkBlack, white} from 'material-ui/styles/colors';
import AddVetProfile from '../components/services/AddVetProfile.jsx';
import Header from '../home/Header.jsx';



export default class ServicesProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        vets: []
      }
      this.postVetProfiles = this.postVetProfiles.bind(this);
    }

    componentDidMount() {
      this.postVetProfiles();
    }

    postVetProfiles(firstName, lastName, phoneNumber, address, businessName, businessType) {
      axios.post('/serviceprofile', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address,
        businessName: businessName,
        businessType: businessType
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }


  render() {
    return (
      <div className="services-sublayout">
        <div>
          <Header />
        </div>
        <h3 style={{color:white}}>¡Tu Servicio, Tu Perfil!</h3>
        <div>
          <AddVetProfile postVetProfiles={this.postVetProfiles}/>
        </div>
      </div>
    )
  }
}
