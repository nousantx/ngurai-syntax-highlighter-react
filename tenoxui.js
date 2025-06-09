import { TenoxUI } from 'tenoxui'
import config from './tenoxui.config.js'

const css = new TenoxUI(config.css)

console.log(css.render('border-b'))
