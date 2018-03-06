import React, { Component } from 'react'

export default class Extras extends Component {
  render () {
    return (
      <div className='extras'>
        <div className='extras-fullscreen extra-button' style={{display: 'none'}}>
          <a href='#openfs' className='openfull' title='Open fullscreen'><i className='material-icons'>&#xE5D0;</i></a>
          <a href='#closefs' className='closefull' title='Close fullscreen' style={{display: 'none'}}><i className='material-icons'>&#xE5D1;</i></a>
        </div>
        <div className='extras-replay extra-button' style={{display: 'none'}}>
          <a href='#replay' className='replay' title='Back to Start'><i className='material-icons'>&#xE042;</i></a>
        </div>
        <div className='extras-autoplay extra-button' style={{display: 'none'}}>
          <a href='#startauto' className='startautoplay' title='Start Autoplay'><i className='material-icons'>&#xE037;</i></a>
          <a href='#pauseauto' className='pauseautoplay' title='Pause Autoplay' style={{display: 'none'}}><i className='material-icons'>&#xE034;</i></a>
        </div>
        <div className='extras-share extra-button' style={{display: 'none'}}>
          <a href='#share' className='share' title='Share this slide'><i className='material-icons'>&#xE80D;</i></a>
        </div>
      </div>
    )
  }
}