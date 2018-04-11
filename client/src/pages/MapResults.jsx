import  React, {Component} from 'react';
import MyMapComponent from '../components/Map.jsx';

export default class MapResults extends Component {
  state = {
    vet: []
  }
  componentDidMount(){
    this.setState({
      vet: this.props.vet
    })
  }
  render(){
    let local = this.props.vet
    return (
      <div>
        <MyMapComponent points={local}/>
      </div>
    )
  }
}
