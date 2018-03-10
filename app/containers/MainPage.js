// @flow
import React, { Component } from 'react'
import styles from './MainPage.css'

import Row from '../components/Row.js'
import Column from '../components/Column.js'
import Preview from '../components/Preview.js'

export default class MainPage extends Component {
  render () {
    return (
      <main className={styles.main}>
        <Row>
          <Column resizable={false} width='10%'>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Toolbar
            </div>
          </Column>
          <Column resizable width='20%'>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Slidelist
            </div>
          </Column>
          <Column resizable width='20%'>
            <div className='siimple-box' style={{backgroundColor: '#ffffff'}}>
              Slide Editor
            </div>
          </Column>
          <Column resizable width='50%'>
            <Preview />
          </Column>
        </Row>
      </main>
    )
  }
}
