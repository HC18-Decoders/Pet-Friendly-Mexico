import React from 'react';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class AddPetProfile extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     petName: '',
     age: '',
     breed: '',
     vaccines: '',
     dewormed: '',
     smallDescription: '',
     autoHideDuration: 4000,
     message: 'Ha creado su perfil',
     open: false
  }
  this.updatePetName = this.updatePetName.bind(this);
  this.updateAge = this.updateAge.bind(this);
  this.updateBreed = this.updateBreed.bind(this);
  this.updateVaccines = this.updateVaccines.bind(this);
  this.updateDewormed = this.updateDewormed.bind(this);
  this.updateSmallDescription = this.updateSmallDescription.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleChangeDuration = this.handleChangeDuration.bind(this);
  this.handleRequestClose = this.handleRequestClose.bind(this);
  this.addNewProfile = this.addNewProfile.bind(this);
 }

 updatePetName(event){
   this.setState({
     petName: event.target.value
   })
 }

 updateAge(event){
   this.setState({
     age: event.target.value
   })
 }

 updateBreed(event){
   this.setState({
     breed: event.target.value
   })
 }

 updateVaccines(event){
   this.setState({
     vaccines: event.target.value
   })
 }

 updateDewormed(event){
   this.setState({
     dewormed: event.target.value
   })
 }

 updateSmallDescription(event){
   this.setState({
     smallDescription: event.target.value
   })
 }

  addNewProfile(){
    this.props.postPetProfile(this.state.petName, this.state.age,
       this.state.breed, this.state.vaccines, this.state.dewormed, this.state.smallDescription);
    this.setState({
      petName: '',
      age: '',
      breed: '',
      vaccines: '',
      dewormed: '',
      smallDescription: ''
    })
  }

  handleClick() {
    this.setState({
      open: true,
    });
  };

  handleChangeDuration(event) {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
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
          <TextField title="petName"
                     onChange={this.updatePetName}
                     underlineStyle={{white}}
                     style={{color:darkBlack, left:180}}
                     floatingLabelText="Nombre de Mascota" />
        </div>
        <div>
          <TextField title="age"
                     onChange={this.updateAge}
                     underlineStyle={{white}}
                     style={{color:darkBlack}}
                     floatingLabelText="Edad"  />
        </div>
        <div>
          <TextField title="breed"
                     onChange={this.updateBreed}
                     underlineStyle={{white}}
                     style={{color:darkBlack}}
                     floatingLabelText="Raza"
                     colors="darkBlack" />
        </div>
        <div>
          <TextField title="vaccines"
                     onChange={this.updateVaccines}
                     underlineStyle={{white}}
                     style={{color:darkBlack}}
                     floatingLabelText="Vacunas" />
        </div>
        <div>
          <TextField title="dewormed"
                     onChange={this.updateDewormed}
                     underlineStyle={{white}}
                     style={{color:darkBlack}}
                     floatingLabelText="Desparasitado(a)?" />
        </div>
        <div>
          <TextField title="smallDescription"
                     onChange={this.updateSmallDescription}
                     underlineStyle={{white}}
                     style={{color:darkBlack}}
                     floatingLabelText="Descripción" />
        </div>
        <div>
          <FlatButton className="submitProf"
                      label="Submit"
                      onClick={this.addNewProfile}
                      style={{left: 680, color: white}} />
        </div>
        <div>
          <Snackbar
            open={this.state.open}
            message="This job was posted!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    );
  }
}

export default AddPetProfile;
