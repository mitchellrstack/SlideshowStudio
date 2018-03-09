// @flow
import React, { Component } from 'react'
import styles from './PreviewControls.css'
import Icon from './Icon.js'

export default class PreviewControls extends Component {
  constructor (props) {
    super(props)
    this.state = {url: this.props.iframe.current}
  }

  onKeyDown (e) {
    const key = e.nativeEvent.key
    if (key === 'Enter') {
      const url = this.state.url
      this.props.onEnter(url)
    }
  }

  onClick (e) {
    e.target.select()
  }

  onRefresh (e) {
    this.props.onRefresh(e)
  }

  onBack (e) {
    this.props.onBack(e)
  }

  onForward (e) {
    this.props.onForward(e)
  }

  render () {
    return (
      <div className={styles.controls}>
        <button className={'siimple-btn siimple-btn--grey ' + styles.button} onClick={(e) => this.onRefresh(e)}>
          <Icon name='refresh-cw' />
        </button>
        <button className={'siimple-btn siimple-btn--grey ' + styles.button} onClick={(e) => this.onBack(e)}>
          <Icon name='arrow-left-circle' />
        </button>
        <button className={'siimple-btn siimple-btn--grey ' + styles.button} onClick={(e) => this.onForward(e)}>
          <Icon name='arrow-right-circle' />
        </button>
        <input type='text'
          className={'siimple-input ' + styles.urlbar}
          value={this.state.url}
          onChange={(e) => this.setState({url: e.target.value})}
          onClick={(e) => this.onClick(e)}
          onKeyDown={(e) => this.onKeyDown(e)} />
      </div>
    )
  }
}
