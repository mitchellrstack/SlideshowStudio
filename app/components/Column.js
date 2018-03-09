// @flow
import React, { Component } from 'react'
import styles from './Column.css'

export default class Column extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resizable: this.props.resizable || true,
      width: this.props.width || 1
    }
  }

  render () {
    return (
      <div className={'siimple-grid-col siimple-grid-col--' + this.state.width + ' ' + styles.column}>
        {this.props.children}
      </div>
    )
  }
}
