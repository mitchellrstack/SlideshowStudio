const SlideDefault = require('../../structs/slide_default.js')
const SlideTitle = require('../../structs/title.js')

const verifySlide = (JSONObject) => {
  switch (JSONObject.type) {
    case ('default'):
      return SlideDefault(JSONObject)
    case ('title'):
      return SlideTitle(JSONObject)
    default:
      throw new Error('Invalid Slide Type!')
  }
}

module.exports = verifySlide
