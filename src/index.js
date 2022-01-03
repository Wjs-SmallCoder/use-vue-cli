import logo from './asset/img/logo.png'
import './asset/css/index.css'

console.log('hello')
document.getElementById('app').innerHTML='<h2>hello</h2>'
const img = new Image()
img.src = logo
document.body.appendChild(img)