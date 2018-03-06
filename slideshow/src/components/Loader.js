import React, { Component } from 'react'

export default class Loader extends Component {
  render () {
    return (
      <div id='loader'>
        <img src='img/ring.svg' alt='loading...' />
      </div>
    )
  }
}