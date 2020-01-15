import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Registration from './registration/Registration'
import Users from './users/Users'
import UserPage from './users/UserPage'
import Venues from './venues/Venues'
import VenuePage from './venues/VenuePage'
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
      <Route path="/users" component={Users} />
      <Route path="/user/:id" component={UserPage} />
      <Route path="/venues" component={Venues} />
      <Route path="/venue/:id" component={VenuePage} />
      <Route path="/reservation" component={Reservation} />
    </Switch>
  )
}