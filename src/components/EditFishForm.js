import React, { Component } from 'react'

export class EditFishForm extends Component {
  handleChange = (e) => {
    const updatedFish = { 
      ...this.props.fish, 
      [e.currentTarget.name]: e.currentTarget.value 
    }

    this.props.updateFish(this.props.fishesKey, updatedFish)
  }
  render () {
    return (
      <div className='fish-edit'>
        <input name='name' onChange={this.handleChange} value={this.props.fish.name} type='text' placeholder='Name' />
        <input name='price' onChange={this.handleChange} value={this.props.fish.price} type='text' placeholder='Price' />
        <select name='status' onChange={this.handleChange} value={this.props.fish.status}>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea name='desc' onChange={this.handleChange} value={this.props.fish.desc} placeholder='Desc' />
        <input name='image' onChange={this.handleChange} value={this.props.fish.image} type='text' placeholder='Image' />
      </div>
    )
  }
}

export default EditFishForm
