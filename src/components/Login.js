import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Login extends Component {
  render () {
    return (
      <nav className='login'>
        <h2>Inventory Login</h2>
        <p>Sign in to manange your stores inventory</p>
        <button className='github' onClick={() => this.props.authenticate('Google')}>
          Login with Google
        </button>
      </nav>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login
