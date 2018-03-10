// @flow
import React, { Component } from 'react'
import styles from './Column.css'

export default class Column extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resizable: this.props.resizable || true,
      width: this.props.width
    }

    console.log(this.state.width)
  }

  render () {
    return (
      <div className={styles.column} style={{width: this.props.width}}>
        {this.props.children}
      </div>
    )
  }
}
