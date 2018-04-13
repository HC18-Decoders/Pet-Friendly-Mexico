import React from 'react';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class AddVetProfile extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     firstName: '',
     lastName: '',
     phoneNumber: '',
     streetAddress: '',
     city: '',
     state: '',
     zipCode: ''
  }
  this.updateFirstName = this.updateFirstName.bind(this);
  this.updateLastName = this.updateLastName.bind(this);
  this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
  this.updateStreetAdress = this.updateStreetAdress.bind(this);
  this.updateCity = this.updateCity.bind(this);
  this.updateState = this.updateState.bind(this);
  this.updateZipCode = this.updateZipCode.bind(this);
 }

 updateFirstName(event){
   this.setState({
     firstName: event.target.value
   })
 }

 updateLastName(event){
   this.setState({
     lastName: event.target.value
   })
 }

 updatePhoneNumber(event){
   this.setState({
     phoneNumber: event.target.value
   })
 }

 updateStreetAdress(event){
   this.setState({
     streetAddress: event.target.value
   })
 }

 updateCity(event){
   this.setState({
     city: event.target.value
   })
 }

updateState(event){
  this.setState({
    state: event.target.value
  })
}

updateZipCode(event){
  this.setState({
    zipCode: event.target.value
  })
}

  addNewProfile(){
    this.props.postVetProfiles(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.streetAddress, this.state.city, this.state.state, this.state.zipCode);
    this.setState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: ''
    })
  }

 render() {
    return (
      <div>
        <h1 className= "title1">
          ! Crea Tu Perfil De Servicio¡
        </h1>
      <div>
        <TextField title="firstName"
                   onChange={this.updateFirstName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Nombre" />
      </div>
      <div>
        <TextField title="lastName"
                   onChange={this.updateLastName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Apellido"  />
      </div>
      <div>
        <TextField title="phoneNumber"
                   onChange={this.updatePhoneNumber}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Telefono"
                   colors="darkBlack" />
      </div>
      <div>
        <TextField title="streetAddress"
                   onChange={this.updateStreetAdress}
                   underlineStyle="white"
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Calle y Numero" />
      </div>
      <div>
        <TextField title="city"
                   onChange={this.updateCity}
                   underlineStyle="white"
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Ciudad" />
      </div>
      <div>
        <TextField title="state"
                   onChange={this.updateState}
                   underlineStyle="white"
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Estado o Provincia" />
      </div>
      <div>
        <TextField title="zipCode"
                   onChange={this.updateZipCode}
                   underlineStyle="white"
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Codigo Postal" />
      </div>
      <div>
        <FlatButton onClick={this.addNewProfile}
                    label="Ingresar"
                    style={{color: darkBlack, left:600}} />
      </div>
      </div>
    );
  }
}

export default AddVetProfile;
