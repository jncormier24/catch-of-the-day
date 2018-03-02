import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  storeName = React.createRef()

  goToStore = (e) => {
    e.preventDefault()

    console.log(this.storeName.value.value)
  }
  render () {
    return (
      <form action='' className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type='text'
          placeholder='Store Name'
          defaultValue={getFunName()}
          ref={this.storeName}
          required />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
