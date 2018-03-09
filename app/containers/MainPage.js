// @flow
import React, { Component } from 'react'
import styles from './MainPage.css'

import Preview from '../components/Preview.js'

export default class MainPage extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Preview />
      </main>
    );
  }
}
