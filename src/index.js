import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Darkmode from 'darkmode-js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

const options = {
  time: '0.5s',
  mixColor: '#fff',
  label: '🌓'
}

const darkmode = new Darkmode(options)
darkmode.showWidget()
