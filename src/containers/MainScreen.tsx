import React from 'react'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import 'index.css';
import Navigation from 'components/Navigation'
import RoutePaths from 'constants/RoutePaths'
import { DashboardContainer, UserContainer, VenueContainer, ReservationContainer } from 'containers'

export default function MainScreen () {
  return (
    <div>
      <Navigation />
      
      <Switch>
        <Route path={ RoutePaths.DASHBOARD } component={ DashboardContainer } />
        <Route path={ RoutePaths.USER } component={ UserContainer } />
        <Route path={ RoutePaths.VENUE } component={ VenueContainer } />
        <Route path={ RoutePaths.RESERVATION } component={ ReservationContainer } />
        <Redirect exact from={ RoutePaths.MAIN }  to={ RoutePaths.DASHBOARD } />
      </Switch>
    </div>   
  )
}