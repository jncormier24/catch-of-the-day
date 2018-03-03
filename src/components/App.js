import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import fishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`${this.props.match.params.storeid}/fishes`, {
      context: this,
      state: 'fishes'
    })
    
    const localStorageRef = localStorage.getItem(this.props.match.params.storeid)
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate () {
    localStorage.setItem(
      this.props.match.params.storeid, 
      JSON.stringify(this.state.order))
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addFish = (fish) => {
    let fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish
    this.setState({
      fishes
    })
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes }
    fishes[key] = updatedFish
    this.setState({
      fishes
    })
  }
  
  deleteFish = (key) => {
    this.updateFish(key, null)
  }

  addToOrder = (fish) => {
    let order = {...this.state.order}
    order[fish] = order[fish] + 1 || 1
    this.setState({
      order
    })
  }

  removeFromOrder = (key) => {
    let order = {...this.state.order}
    delete order[key]
    this.setState({
      order
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes
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
        <Order 
          removeFromOrder={this.removeFromOrder}
          fishes={this.state.fishes} 
          order={this.state.order} />
        <Inventory 
          storeid={this.props.match.params.storeid}
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          />
      </div>
    )
  }
}

export default App
