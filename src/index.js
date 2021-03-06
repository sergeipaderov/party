import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { ThemeProvider } from '@material-ui/styles'
import FirebaseContext from './context/firebaseContext'
import Firebase from './services/firebase'

// import { CssBaseline } from '@material-ui/core'

import theme from './assets/styles/theme'

import rootReducer from './reducers'

import App from './App'

// import GlobalStyle from './assets/styles/global-style'
// import { media } from './assets/styles/media'
import './index.css'

const store = new createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    {/* <GlobalStyle /> */}
    <ThemeProvider theme={theme}>
      <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
          {/* <CssBaseline /> */}
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
