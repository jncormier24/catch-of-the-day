import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

export class Inventory extends Component {
  render () {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        {
          Object.keys(this.props.fishes)
            .map(key => (
              <EditFishForm
                key={key}
                fishesKey={key}
                fish={this.props.fishes[key]}
                updateFish={this.props.updateFish}
                deleteFish={this.props.deleteFish} />
            ))
        }
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory
