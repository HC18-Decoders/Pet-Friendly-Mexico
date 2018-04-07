import React, { Component } from 'react'
import axios from 'axios';


export default class ServicesProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
      }
      this.getVet = this.getVet.bind(this);
      this.postVetProfiles = this.postVetProfiles.bind(this);
    }

    componentDidMount() {
      this.getVet();
    }

    getVet(){
      axios.get('/servicesprofile', {
        petName: petName,
        age: age,
        breed: breed,
        vaccines: vaccines,
        dewormed: dewormed,
        smallDescription: smallDescription
      })
      .catch(error => {
        console.log(error);
      });
    }


    postVetProfiles(firstName, lastName, phoneNumber, address) {
      axios.post('/servicesprofile', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address
      })
      .then(() => {
        this.getVet();
      })
    }


  render() {
    return (
      <div className="services-sublayout">
        <div>
          <Header />
        </div>
        <div>
          <AddVetProfile postVetProfile={this.postVetProfile}/>
        </div>
      </div>
    )
  }
}
