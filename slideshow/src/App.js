import React, { Component } from 'react'
import Reveal from './lib/reveal.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: {},
      slides: []
    }
  }

  componentDidMount () {
    // Once DOM is rendered, initialize Reveal
    Reveal.initialize()
  }

  render () {
    const slides = this.state.slides
    return (
      <div className='reveal'>
        <div className='slides'>
          { slides }
        </div>
      </div>
    )
  }
}

export default App
