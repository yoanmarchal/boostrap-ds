import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
import 'bootstrap';


import('normalize.css/normalize.css')
import('../scss/main.scss')
import('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

console.log(Foo.instance().getValue())
console.log(Bar())
