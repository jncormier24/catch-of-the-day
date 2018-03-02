import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import fishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    let fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes
    })
  }
  
  loadSampleFishes = () => {
    this.setState({
      fishes
    })
  }

  addToOrder = (fish) => {
    let order = {...this.state.order}
    order[fish] = order[fish] + 1 || 1
    this.setState({
      order
    })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className="fishes">
            { Object
                .keys(this.state.fishes)
                .map(key => (
                  <Fish key={key} fishesKey={key} fish={this.state.fishes[key]} addToOrder={this.addToOrder} />
                )
              )
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  }
}

export default App
