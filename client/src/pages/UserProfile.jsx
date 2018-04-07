import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

import AddPetProfile from '../components/user/AddPetProfile.jsx';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: []
      }
      this.insertPetProfile = this.insertPetProfile.bind(this);
    }

    componentDidMount() {
      
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
          this.getVet()
        })
      }

      render() {
        return (
          <div className="pet-sublayout">
            <div>
              <Header />
            </div>
            <div>
              <AddPetProfile insertPetProfile={this.insertPetProfile}/>
            </div>
          </div>
        )
      }
    }
