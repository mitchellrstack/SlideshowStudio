// @flow
import React, { Component } from 'react'
import styles from './MainPage.css'

import Column from '../components/Column.js'
import Preview from '../components/Preview.js'

export default class MainPage extends Component {
  render () {
    return (
      <main className={'siimple-grid ' + styles.main}>
        <div className='siimple-grid-row' style={{height: 'calc(100% - 5px)'}}>
          <Column resizable={false} width={1}>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Toolbar
            </div>
          </Column>
          <Column resizable={true} width={2}>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Slidelist
            </div>
          </Column>
          <Column resizable={true} width={2}>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Slide Editor
            </div>
          </Column>
          <Column resizable={true} width={7}>
            <Preview />
          </Column>
        </div>
      </main>
    )
  }
}
