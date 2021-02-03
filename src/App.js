import React from 'react'
import './global.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import FeedPage from './pages/FeedPage'
import PostWitPage from './pages/PostWitPage'

const App = () =>
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/feed' component={FeedPage} />
      <Route exact path='/new' component={PostWitPage} />
    </Switch>
  </Router>

export default App
