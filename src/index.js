import React from 'react'

import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Router>
      {/* Wrap your App with BrowserRouter */}
      <App />
    </Router>
  </Provider>,
)
