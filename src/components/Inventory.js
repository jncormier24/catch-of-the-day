import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

export class Inventory extends Component {
  render () {
    return (
      <div className='inventory'>
        Inventory!!!
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory
