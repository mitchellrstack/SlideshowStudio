import React, { Component } from 'react'
import Slideshow from './components/Slideshow.js'
import Loader from './components/Loader.js'
import Wrapper from './components/Wrapper.js'
import Extras from './components/Extras.js'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <Loader />

        <Wrapper hidden>
          <Slideshow />

          <Extras />
        </Wrapper>
      </div>
    )
  }
}
