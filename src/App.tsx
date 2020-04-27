import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import RoutePaths from 'constants/RoutePaths'
import Login from 'modules/login/Login'
import Registration from 'modules/registration/Registration'
import MainScreen from 'containers/MainScreen'

export default function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path={ RoutePaths.LOGIN } component={ Login }></Route>
          <Route path={ RoutePaths.REGISTER } component={ Registration }></Route>
          <Route path={ RoutePaths.MAIN } component={ MainScreen }></Route>
          <Redirect exact from="/" to="login" />
        </Switch>
      </Router>
      
    </div>
  )
}
