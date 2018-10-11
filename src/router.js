import React from 'react'
import {BrowserRouter, switch, Route} from 'react-router-dom'
import App from './app'


const Router = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
)

export default Router
