import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import data from './src/api.json'
import Home from './src/pages/containers/home'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import reducer from './src/reducers/data'

const initialState = {
  data: {
    ...data,
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const provider = <Provider store={store}>
  <Home/>
</Provider>

ReactDOM.render(provider, document.getElementById('root'))
registerServiceWorker()

//source: https://github.com/LeonidasEsteban/platzi-video