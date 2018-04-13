import React from 'react';

//import Avatar from 'material-ui/Avatar';
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
     address: '',
     businessName: '',
     businessType: ''
  }
  this.updateFirstName = this.updateFirstName.bind(this);
  this.updateLastName = this.updateLastName.bind(this);
  this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
  this.updateAdress = this.updateAdress.bind(this);
  this.updateBusinessName = this.updateBusinessName.bind(this);
  this.updateBusinessType = this.updateBusinessType.bind(this);
  this.addNewServiceProfile = this.addNewServiceProfile.bind(this);
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

 updateBusinessName(event){
   this.setState({
     businessName: event.target.value
   })
 }

 updateBusinessType(event){
   this.setState({
     businessType: event.target.value
   })
 }


  addNewServiceProfile(){
    this.props.postVetProfiles(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.address, this.state.businessName, this.state.businessType);

    this.setState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      businessName: '',
      businessType: ''
    })
  }

 render() {
    return (
      <div>
        <TextField title="firstName"
                   onChange={this.updateFirstName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}

                   floatingLabelText="Nombre" />
                 <br/>
        <TextField title="lastName"
                   onChange={this.updateLastName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}

                   floatingLabelText="Apellido"  />
      <br/>
        <TextField title="phoneNumber"
                   onChange={this.updatePhoneNumber}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Telefono"
                   colors="darkBlack" />
      <br/>
        <TextField title="streetAddress"
                   onChange={this.updateStreetAdress}
                   underlineStyle={{white}}
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Calle y Numero" />
      <br/>
        <TextField title="city"
                   onChange={this.updateCity}
                   underlineStyle={{white}}
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Ciudad" />
      <br/>
        <TextField title="state"
                   onChange={this.updateState}
                   underlineStyle={{white}}
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Estado o Provincia" />
      <br/>
        <TextField title="zipCode"
                   onChange={this.updateZipCode}
                   underlineStyle={{white}}
                   fullLength={true}
                   style={{color:darkBlack, left:500}}
                   floatingLabelText="Codigo Postal" />
      <br/>
        <FlatButton onClick={this.addNewProfile}

                    label="Ingresar"
                    style={{color: darkBlack, left:600}} />

      </div>
    );
  }
}

export default AddVetProfile;
