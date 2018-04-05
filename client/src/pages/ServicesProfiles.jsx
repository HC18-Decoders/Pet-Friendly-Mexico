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
        address: '',
      };
    };


    postVetProfiles(firstName, lastName, phoneNumber, address) {
      axios.post('/', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address
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
    }




  render() {
  return (
    <div>
      <div>
      <Avatar
        icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
        size={250}
        position="right"
      />
    </div>
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
      <TextField title="address" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Domicilio" />
    </div>
    <div>
      <FlatButton onClick={(e) => this.handleClick(e)} label="Ingresar" style={{color: darkBlack}} />
    </div>
    </div>
  )
}
}
