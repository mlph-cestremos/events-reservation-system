import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Registration from './registration/Registration'
import User from './users/User'
import Venue from './venues/Venue'
import Reservation from './reservation/Reservation'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import 'index.css';

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/users" component={User} />
      <Route path="/venues" component={Venue} />
      <Route path="/reservation" component={Reservation} />
    </Switch>
  )
}