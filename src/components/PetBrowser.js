import React from 'react'
import App from './App'
import Pet from './Pet'


class PetBrowser extends React.Component {
  
  petArray = () => this.props.pets.map(pet => <Pet onAdoptPet={this.props.adoptPet} petData={pet} key={pet.id}/>)
  
  render() {
    return (
      <div className="ui cards">
        {this.petArray()}
      </div>)
  }
}

export default PetBrowser
 