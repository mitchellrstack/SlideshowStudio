import React, { Component } from 'react'
import Reveal from '../lib/reveal.js'
import Slide from './Slide.js'

export default class Slideshow extends Component {
  constructor (props) {
    super(props)

    this.initialized = false

    this.state = {
      options: {},
      slides: []
    }
  }

  componentDidMount () {
    // Fetch the slides
    window.fetch('./data/config.json')
      .then(res => {
        return res.json()
      }).then(data => {
        // Set the slides from the config
        this.setState({
          slides: data.slides
        })

        // Once DOM is rendered, initialize Reveal
        Reveal.initialize({
          history: true,
          help: false,
          mouseWheel: true,
          transition: 'convex',
          backgroundTransition: 'convex',
          viewDistance: 3,
          margin: 0.15,
          fragments: false,
          loop: true
        })

        this.initialized = true
      })

    document.body.classList.add('loaded')
  }

  componentDidUpdate () {
    // Refreshes Reveal after updating slides (Only after it has been initialized)
    if (this.initialized) Reveal.layout()
  }

  render () {
    const slides = this.state.slides.map((e, i) => {
      return (
        <Slide key={i} index={i} {...e}></Slide>
      )
    })

    return (
      <div className='reveal'>
        <div className='slides' id='chooseunh-slides'>{slides}</div>
      </div>
    )
  }
}
