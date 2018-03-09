// @flow
import React, { Component } from 'react'
import feather from 'feather-icons'

export default class Icon extends Component {
  componentDidUpdate () {
    feather.replace()
  }

  componentDidMount () {
    feather.replace()
  }

  render () {
    return (
      <i data-feather={this.props.name} />
    )
  }
}
