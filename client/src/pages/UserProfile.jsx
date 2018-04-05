import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        petName: '',
        age: '',
        breed: '',
        vaccines: '',
        dewormed: '',
        smallDescription: ''
      };
      this.add = this.add.bind(this);
    };


    postPetProfiles(petName, age, breed, vaccines, dewormed, smallDescription) {
      axios.post('/vetProfiles', {
      petName : petName,
      age : age,
      breed : breed,
      vaccines : vaccines,
      dewormed : dewormed,
      smallDescription : smallDescription
      })
      .then(() => {
        this.getPetProfile
      })
    }
    
    add() {
      this.props.addInput(this.state.petName,
                          this.state.age,
                          this.state.breed,
                          this.state.vaccines,
                          this.state.dewormed,
                          this.state.smallDescription)
    }

  render() {
  return (
    <div>
      <div>
      <Avatar
        icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
        size={250}
      />
    </div>
    <div>
      <TextField title="petName" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Nombre de Mascota" />
    </div>
    <div>
      <TextField title="age" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Edad"  />
    </div>
    <div>
      <TextField title="breed" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Raza" colors="darkBlack" />
    </div>
    <div>
      <TextField title="vaccines" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Vacunas" />
    </div>
    <div>
      <TextField title="dewormed" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Desparasitado(a)?" />
    </div>
    <div>
      <TextField title="smallDescription" underlineStyle="white" fullLength={true} style={{color:darkBlack}}
        floatingLabelText="Descripción" />
    </div>
    <div>
      <FlatButton className="submitProf" label="Submit" onClick={(e) => this.handleClick(e)} style={{left: 680, color: white}} />
    </div>
    </div>
  )
}
}
