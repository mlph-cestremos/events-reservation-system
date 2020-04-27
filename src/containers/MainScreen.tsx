import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../modules/home/Home'
import Login from '../modules/login/Login'
import Registration from '../modules/registration/Registration'
import User from '../modules/users/User'
import Venue from '../modules/venues/Venue'
import Reservation from '../modules/reservation/Reservation'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import 'index.css';
import Navigation from 'modules/navigation/Navigation'

export default function MainScreen() {
  return (
    <div>
      <Navigation />
    </div>
    
    // <Switch>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/login" component={Login} />
    //   <Route path="/register" component={Registration} />
    //   <Route path="/users" component={User} />
    //   <Route path="/venues" component={Venue} />
    //   <Route path="/reservation" component={Reservation} />
    // </Switch>
  )
}