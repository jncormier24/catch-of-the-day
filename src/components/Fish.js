import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export class Fish extends Component {
  addToOrder = () => {
    this.props.addToOrder(this.props.fishesKey)
  }
  render () {
    const { image, name, price, desc, status } = this.props.fish
    const isAvailable = status === 'available'
    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{ formatPrice(price) }</span>
        </h3>
        <p>{ desc }</p>
        <button 
          disabled={!isAvailable} 
          onClick={this.addToOrder}>
            { isAvailable ? 'Add To Cart' : 'Sold Out!' }
        </button>
      </li>
    )
  }
}

export default Fish
