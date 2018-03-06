import React, { Component } from 'react'

export default class Slide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: this.props.index || 0,
      type: this.props.type || 'Default',
      header: this.props.header || 'Blah',
      paragraph: this.props.paragraph || 'Blah blah blah',
      backgroundImage: this.props.backgroundImage || '',
      backgroundPosition: this.props.backgroundPosition || ''
    }
  }

  componentDidMount () {
    // Load the image after mounting?
  }

  render () {
    return (
      <section
        data-background-image={this.state.backgroundImage}
        data-background-position={this.state.backgroundPosition}
        id={'slide-' + this.props.index}>
        <div className='reason-container'>
          <h2 className='number'>{this.state.index + 1}</h2>
          <h1 className='reason-header'>{this.state.header}</h1>
          <p className='reason-paragraph'>{this.state.paragraph}</p>
        </div>
      </section>
    )
  }
}
