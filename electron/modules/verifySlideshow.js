const Slideshow = require('../../structs/slideshow.js')

const verifySlideshow = (JSONObject) => {
  return Slideshow(JSONObject)
}

module.exports = verifySlideshow

const test = {
  'meta': {
    'title': 'BLAH',
    'description': 'BLAH',
    'canonical': 'https://www.blah.com',
    'applicationName': 'BLAH',
    'og': {},
    'twitter': {}
  },
  'options': {
    'loop': true,
    'autoslide': 5000,
    'numbered': true,
    'reversed': false
  },
  'menu': [],
  'slides': [
    {
      'type': 'default',
      'backgroundImage': 'hcur_perry.jpg',
      'header': 'Discovered how to prepare forests for environmental shifts',
      'paragraph': 'Emily Perry \'18, Environmental Conservation & Sustainability'
    },
    {
      'type': 'default',
      'backgroundImage': 'hcur_hutchison.jpeg',
      'header': 'Disproved a long-established mathematical theory (Kaplansky’s 1973 Conjecture)',
      'paragraph': 'Kirsten Hutchison \'06 & Derek Pouliot \'06, Mathematics'
    },
    {
      'type': 'default',
      'backgroundImage': 'hcur_emily.jpg',
      'header': 'Inspired the establishment of a nursing education facility in Uganda',
      'paragraph': 'Emily Roberts \'08, Nursing'
    }
  ]
}

verifySlideshow(test)
