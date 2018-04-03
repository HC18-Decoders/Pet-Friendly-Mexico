import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state = [];
    };


    postVetProfiles(firstName, lastName, phoneNumber, address) {
      axios.post('/vetProfiles', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: address
      })
      .then(() => {
        this.getVetProfile
      })
    }

  render() {
  return (
    <div>
      <div>
      <Avatar
        icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
        size={90}
      />
    </div>
    <div>
      <input title="Name">Name</input>
    </div>
    <div>
      <input title="Age">Age</input>
    </div>
    <div>
      <input title="Description">Description</input>
    </div>
    <div>
      <input title="Additional Info">Additional Info</input>
    </div>
    </div>
  )
}
}
