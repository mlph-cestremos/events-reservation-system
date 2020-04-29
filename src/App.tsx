import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import RoutePaths from 'constants/RoutePaths'
import { MainScreen, Login, Registration } from 'containers'

export default function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path={ RoutePaths.LOGIN } component={ Login }></Route>
          <Route path={ RoutePaths.REGISTER } component={ Registration }></Route>
          <Route path={ RoutePaths.MAIN } component={ MainScreen }></Route>
          <Redirect exact from={ RoutePaths.BASE }  to={ RoutePaths.LOGIN } />
        </Switch>
      </Router>
      
    </div>
  )
}
