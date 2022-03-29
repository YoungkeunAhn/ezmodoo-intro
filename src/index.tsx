import ScrollToTop from 'common/sroll-top-btn/ScrollToTop'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop />
    <App />
  </BrowserRouter>,

  document.getElementById('root')
)
