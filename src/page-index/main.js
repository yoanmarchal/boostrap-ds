import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
import 'bootstrap';


require('normalize.css/normalize.css')
require('../scss/main.scss')
require('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

console.log(Foo.instance().getValue())
console.log(Bar())
