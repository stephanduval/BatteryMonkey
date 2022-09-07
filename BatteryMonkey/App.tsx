import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './Counter'

ReactDOM.render(
  <Provider store={store}>
    <App >
    <Counter> </Counter>
    </App>
  </Provider>,
  document.getElementById('root')
)