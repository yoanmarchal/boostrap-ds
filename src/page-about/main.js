import 'bootstrap'
import 'normalize.css/normalize.css'
import '../scss/main.scss'

const img = require('../img/unicorn.jpg')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about')
  console.log('Image through require()', img)
})
