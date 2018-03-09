// This is the title slide type file
// Simply import this when making a new slide
const struct = require('superstruct')

const TitleSlide = struct({
  backgroundColor: 'string?',
  backgroundImage: 'string?',
  header: 'string?',
  subheader: 'string?'
}, { // Defaults
  backgroundColor: '#001d52'
})

module.exports = TitleSlide
