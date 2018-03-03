import React, { Component } from 'react'
import firebase from 'firebase'
import base, { firebaseApp } from '../base'
import Login from './Login'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

export class Inventory extends Component {
  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]

    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
  }

  authHandler = async (data) => {
    const store = await base.fetch(`${this.props.storeid}`, { context: this })

    if (!store.owner) {
      await base.post(`${this.props.storeid}/owner`, { data: data.user.uid })
    } 

    this.setState({
      uid: data.user.uid,
      owner: store.owner || data.user.uid
    })
  }

  logout = async () => {
    await firebase.auth().signOut()
    this.setState({
      uid: null
    })
  }

  render () {
    const logout = <button onClick={this.logout}>Log Out!</button>

    if (this.state.uid == null) {
      return <Login authenticate={this.authenticate} />
    }
    if (this.state.uid != this.state.owner) {
      return (
        <div>
          <p>
            Sorry, you are not the owner
            { logout }
          </p>
        </div>
      )
    }
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        { logout }
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
