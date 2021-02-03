import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType       
      }
    })
  }

  onFindPetsClick = () => {
    let petType = this.state.filters.type
    let url = `/api/pets?type=${petType}`
    if(petType === 'all') { url = '/api/pets' }
    
    fetch(url)
    .then(res => res.json())
    .then(pets => this.mapPets(pets))
  }

  mapPets = (pets) => {  
    this.setState({
      ...this.state,
      pets: pets
    })
    console.log(this.state)
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet}
    )
    this.setState({ 
      pets: pets 
    });
  }
 
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.onChangeType} findPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
