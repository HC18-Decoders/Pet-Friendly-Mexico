import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {darkBlack, white} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {

  height: 645,

  width: -25,

  display: 'block'

};

class AddPetProfile extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      petName: '',

      age: '',

      breed: '',

      vaccines: '',

      dewormed: '',

      smallDescription: '',

      res: {}

    }

    this.updatePetName = this.updatePetName.bind(this);

    this.updateAge = this.updateAge.bind(this);

    this.updateBreed = this.updateBreed.bind(this);

    this.updateVaccines = this.updateVaccines.bind(this);

    this.updateDewormed = this.updateDewormed.bind(this);

    this.updateSmallDescription = this.updateSmallDescription.bind(this);

  }

  updatePetName(event) {

    this.setState({petName: event.target.value})

  }

  updateAge(event) {

    this.setState({age: event.target.value})

  }

  updateBreed(event) {

    this.setState({breed: event.target.value})

  }

  updateVaccines(event) {

    this.setState({vaccines: event.target.value})

  }

  updateDewormed(event) {

    this.setState({dewormed: event.target.value})

  }

  updateSmallDescription(event) {

    this.setState({smallDescription: event.target.value})

  }

  addNewProfile() {

    this.props.insertPetProfile(this.state.petName, this.state.age, this.state.breed, this.state.vaccines, this.state.dewormed, this.state.smallDescription);

    this.setState({

      petName: '',

      age: '',

      breed: '',

      vaccines: '',

      dewormed: '',

      smallDescription: ''

    })

  }

  render() {

    return (<div>

      <div>

        <Card>

          <CardHeader title="URL Avatar" subtitle="Subtitle"/>

          <CardMedia overlay={<CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>

            <img src="https://media.wired.com/photos/5a55457ef41e4c2cd9ee6cb5/master/w_2400,c_limit/Doggo-TopArt-104685145.jpg" style={style} alt="image"/>

          </CardMedia>

        </Card>

      </div>

      <div>

        <form action="/action_page.php">

          <input type="file" name="pic" accept="image/*"/>

          <input type="submit"/>

        </form>

      </div>

      <div>

        <TextField title="petName" onChange={this.updatePetName} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Nombre de Mascota"/>

      </div>

      <div>

        <TextField title="age" onChange={this.updateAge} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Edad"/>

      </div>

      <div>

        <TextField title="breed" onChange={this.updateBreed} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Raza" color="darkBlack"/>

      </div>

      <div>

        <TextField title="vaccines" onChange={this.updateVaccines} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Vacunas"/>

      </div>

      <div>

        <TextField title="dewormed" onChange={this.updateDewormed} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Desparasitado(a)?"/>

      </div>

      <div>

        <TextField title="smallDescription" onChange={this.updateSmallDescription} underlineStyle={{
            white
          }} style={{
            color: darkBlack,
            left: 380
          }} floatingLabelText="Descripción"/>

      </div>

      <div>

        <FlatButton className="submitProf" label="Submit" onClick={this.addNewProfile} style={{
            left: 680,
            color: white
          }}/>

      </div>

    </div>);

  }

}

export default AddPetProfile;
