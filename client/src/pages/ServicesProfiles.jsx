import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';


export default class Services extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        businessName: '',
        businessType: ''
      };
    };


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
        this.postVetProfiles();
      })
    }

    handleClick() {
      alert('I am working');
    }


    componentDidMount() {
      this.postVetProfiles();





  render() {
  return (
    <div>
    <div>
      <TextField title="firstName" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Nombre" />
    </div>
    <div>
      <TextField title="lastName" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Apellido"  />
    </div>
    <div>
      <TextField title="phoneNumber" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Telefono" colors="darkBlack" />
    </div>
    <div>
      <TextField title="streetAddress" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Calle y Numero" />
    </div>
    <div>
      <TextField title="city" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Ciudad" />
    </div>
    <div>
      <TextField title="state" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Estado o Provincia" />
    </div>
    <div>
      <TextField title="zipCode" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Codigo Postal" />
    </div>
    <div>
      <TextField title="businessName" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Nombre del Negocio" />
    </div>
    <div>
      <TextField title="businessType" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Tipo de Negocio" />
    </div>
    <div id="submit-buttonFor-Service">
      <FlatButton onClick={(e) => this.handleClick(e)} label="Submit" style={{color: darkBlack}} />
    </div>
    </div>
  )
}
}
