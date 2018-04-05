import React from 'react';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    }
    this.selectSingleProfile = this.selectSingleProfile.bind(this);
  }

  componentDidMount() {
    this.selectSingleProfile(this.props.data)
  }

  selectSingleProfile(profiles){
    for (let key in profiles) {
      for (let i = 0; i < profiles[key].length; i++){
        if (profiles[key][i].id === parseInt(this.props.match.params.id)) {
          this.setState({
            profile: profiles[key][i]
          })
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div style={{color: "black"}}>
          <div>{`${props.vet.firstName} ${props.vet.lastName} ${props.vet.phoneNumber} ${props.vet.address}`}</div>
        </div>
      </div>
    )
  }
}
