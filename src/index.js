import React from 'react'

import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import store from './Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
