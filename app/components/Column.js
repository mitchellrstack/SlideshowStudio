// @flow
import React, { Component } from 'react'

export default class Column extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resizable: this.props.resizable || true,
      width: this.props.width || '400px'
    }
  }

  render () {
    return (
      <div className='column' style={this.state.width}>
        {this.props.children}
      </div>
    )
  }
}
