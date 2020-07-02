import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'

import rootReducer from './reducers'

import App from './App'

import theme from './assets/styles/theme'
import GlobalStyle from './assets/styles/global-style'
import { media } from './assets/styles/media'
import './index.css'

const store = new createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider
      theme={{
        ...theme,
        ...media,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
