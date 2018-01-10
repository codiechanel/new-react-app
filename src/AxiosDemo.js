import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from 'material-ui/Button'

import axios from 'axios'

class App extends Component {
  send() {
    function getUserAccount() {
      return axios.get('https://facebook.github.io/react-native/movies.json')
    }

    function getUserPermissions() {
      return axios.get('https://facebook.github.io/react-native/movies.json')
    }

    axios.all([getUserAccount(), getUserPermissions()]).then(
      axios.spread(function(acct, perms) {
        // Both requests are now complete
        console.log('acc', acct, 'perms', perms)
      })
    )
  }
  render() {
    return (
      <div>
        Axios Demo
        <Button raised color="primary" onClick={() => this.send()}>
          Send Request
        </Button>
      </div>
    )
  }
}

export default App
