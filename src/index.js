import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'

import theme from './assets/styles/theme'
import GlobalStyle from './assets/styles/global-style'
import { media } from './assets/styles/media'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)
