import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import data from './src/api.json'


import Home from './src/pages/containers/home'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Home data={data}/>, document.getElementById('root'))
registerServiceWorker()

//source: https://github.com/LeonidasEsteban/platzi-video