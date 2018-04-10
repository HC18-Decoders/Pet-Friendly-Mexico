import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

import Header from '../home/Header.jsx';
import AddPetProfile from '../components/user/AddPetProfile.jsx';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        pet: []
      }
      this.getPet = this.getPet.bind(this);
      this.postPetProfile = this.postPetProfile.bind(this);
    }

    componentDidMount() {
      this.getPet();
    }

    getPet() {
      axios.get('/userprofile')
        .then(data => {
          this.setState({pet: data[0]})
        })
        .catch(error => {
          console.log(error);
        });
    }



    postPetProfile(petName, age, breed, vaccines, dewormed, smallDescription) {
      axios.post('/userprofile', {
        petName : petName,
        age : age,
        breed : breed,
        vaccines : vaccines,
        dewormed : dewormed,
        smallDescription : smallDescription
        })
        .then(() => {
          this.getPet()
        })
      }

      render() {
        return (
          <div className="pet-sublayout">
            <div>
              <Header />
            </div>
            <h3> Creat tu Perfil de tu Mascota!</h3>
            <div>
              <AddPetProfile postPetProfile={this.postPetProfile}/>
            </div>
          </div>
        )
      }
    }
