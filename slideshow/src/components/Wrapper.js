import React, { Component } from 'react'

export default class Wrapper extends Component {
  constructor (props) {
    super(props)

    const hidden = props.hidden
    this.state = { hidden: hidden }
  }

  render () {
    return (
      <div id='content'>
        <header role='banner' style={{display: this.state.hidden ? 'none' : ''}}>
          <a href='https://www.unh.edu/' className='cd-logo' title='The University of New Hampshire' rel='noopener noreferrer' target='_blank'>
            <img src='img/logo.png' alt='UNH Logo' />
          </a>
        </header>

        <nav className='cd-primary-nav' style={{display: this.state.hidden ? 'none' : ''}}>
          <ul>
            <li><a href='#blah'>Item</a></li>
          </ul>
        </nav>

        <main className='cd-content'>
          {this.props.children}
        </main>

        <div className='cd-overlay-nav'>
          <span />
        </div>
        <div className='cd-overlay-content'>
          <span />
        </div>
        <a href='#0' className='cd-nav-trigger no-select' style={{display: this.state.hidden ? 'none' : ''}}>Menu<span className='cd-icon' /></a>
      </div>
    )
  }
}
