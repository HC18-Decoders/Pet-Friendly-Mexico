import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {};
    };


    postServiceProfiles(firstName, lastName, phoneNumber, address) {
      axios.post('/serviceProfiles', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address
      })
      .then(() => {
        this.getServiceProfile
      })
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
      <TextField title="Name" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Nombre" />
    </div>
    <div>
      <TextField title="Age" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Edad"  />
    </div>
    <div>
      <TextField title="Breed" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Raza" colors="darkBlack" />
    </div>
    <div>
      <TextField title="Vaccines" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Vacunas" />
    </div>
    <div>
      <TextField title="Dewormed" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Desparasitación" />
    </div>
    <div>
      <TextField title="smallDescription" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Descripción" />
    </div>
    </div>
  )
}
}
