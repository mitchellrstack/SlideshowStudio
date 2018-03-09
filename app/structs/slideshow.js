// This file is for validation of the save files
// before loading and during saving
const struct = require('superstruct').struct
const isUrl = require('is-url')

const Slideshow = struct({
  meta: {
    title: 'string',
    description: 'string',
    canonical: isUrl,
    applicationName: 'string',
    og: 'object?',
    twitter: 'object?'
  },
  options: {
    loop: 'boolean',
    autoslide: 'number',
    numbered: 'boolean',
    reversed: 'boolean'
  },
  menu: 'array',
  slides: 'array',
  manifest: 'object?'
})

module.exports = Slideshow
