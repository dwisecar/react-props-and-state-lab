import React from 'react'

class Pet extends React.Component {
  
  genderSymbol = (gender) => {
    return gender == 'male' ? '♂' : '♀'
  }

  checkIsAdopted = isAdopted => {
    if (isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.petData.id)}>Adopt pet</button>
    }
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol(this.props.petData.gender)}
            {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {this.checkIsAdopted(this.props.petData.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
 