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
     address: ''
  }
  this.updateFirstName = this.updateFirstName.bind(this);
  this.updateLastName = this.updateLastName.bind(this);
  this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
  this.updateAdress = this.updateAdress.bind(this);
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

 updateAdress(event){
   this.setState({
     address: event.target.value
   })
 }



  addNewProfile(){
    this.props.postVetProfiles(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.address);
    this.setState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: ''
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
        <TextField title="firstName"
                   onChange={this.updateFirstName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack}}
                   floatingLabelText="Nombre" />
      </div>
      <div>
        <TextField title="lastName"
                   onChange={this.updateLastName}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack}}
                   floatingLabelText="Apellido"  />
      </div>
      <div>
        <TextField title="phoneNumber"
                   onChange={this.updatePhoneNumber}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack}}
                   floatingLabelText="Telefono"
                   colors="darkBlack" />
      </div>
      <div>
        <TextField title="address"
                   onChange={this.updateAdress}
                   underlineStyle={{white}}
                   fulllength='true'
                   style={{color:darkBlack}}
                   floatingLabelText="Domicilio" />
      </div>
      <div>
        <FlatButton onClick={this.addNewProfile}
                    label="Ingresar"
                    style={{color: darkBlack}} />
      </div>
      </div>
    );
  }
}

export default AddVetProfile;
