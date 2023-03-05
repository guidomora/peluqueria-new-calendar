import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Calendario from './Calendario'
import './index.css'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Calendario />
    </Provider>
  </React.StrictMode>,
)
