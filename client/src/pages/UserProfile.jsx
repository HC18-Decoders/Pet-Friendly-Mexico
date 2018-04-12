import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {darkBlack, white} from 'material-ui/styles/colors';
import Header from '../home/Header.jsx';
import AddPetProfile from '../components/user/AddPetProfile.jsx';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        pet: []
      }
      this.getPetProfiles = this.getPetProfiles.bind(this);
      this.postPetProfile = this.postPetProfile.bind(this);
    }


    add() {
      this.props.addInput(this.state.petName,
                          this.state.age,
                          this.state.breed,
                          this.state.vaccines,
                          this.state.dewormed,
                          this.state.smallDescription)
}

    componentDidMount() {
      this.getPetProfiles();
    }

    getPetProfiles() {
      axios.get('/profile')
        .then(data => {
          this.setState({pet: data[0]})
        })
        .catch(error => {
          console.log(error);
        });
    }


    postPetProfile(petName, age, breed, vaccines, dewormed, smallDescription) {
      axios.post('/profile', {
        petName : petName,
        age : age,
        breed : breed,
        vaccines : vaccines,
        dewormed : dewormed,
        smallDescription : smallDescription
        })
        .then(() => {
          this.getPetProfiles()
        })
      }

      render() {
        return (
          <div className="pet-sublayout">
            <div>
              <Header />
            </div>
            <h3 style={{color:white}}>¡Crea el perfil de tu Mascota!</h3>
            <div>
              <AddPetProfile postPetProfile={this.postPetProfile}/>
            </div>
          </div>
        )
      }
    }
