// This is the default slide type file
// Simply import this when making a new slide
const struct = require('superstruct')

const DefaultSlide = struct({
  index: 'number',
  backgroundColor: 'string?',
  backgroundImage: 'string?',
  header: 'string?',
  paragraph: 'string?'
}, { // Defaults
  backgroundColor: '#001d52'
})

module.exports = DefaultSlide
