// @flow
import React, { Component } from 'react'
import styles from './Preview.css'

import PreviewControls from './PreviewControls.js'

export default class Preview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iframe: {
        src: 'https://feathericons.com/',
        current: 'https://feathericons.com/'
      }
    }
  }

  render () {
    return (
      <div className={'siimple-box ' + styles.preview}>
        <PreviewControls {...this.state}
          onEnter={(e) => this.setState({iframe: {current: e}})}
          onRefresh={(e) => { document.getElementById('preview-iframe').src = this.state.iframe.current }}
          onBack={(e) => document.getElementById('preview-iframe').contentWindow.goBack}
          onForward={(e) => console.log('Forward', e)} />
        <iframe id='preview-iframe' className={styles.iframe} src={this.state.iframe.current} />
      </div>
    )
  }
}
