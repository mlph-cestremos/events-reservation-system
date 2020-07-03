import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect,useHistory,useLocation } from 'react-router-dom'
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
          <Route path="*">
            <NoMatch />
          </Route>

          
          <Redirect exact from={ RoutePaths.BASE }  to={ RoutePaths.LOGIN } />
        </Switch>
      </Router>
      
    </div>
  )
}

function NoMatch() {
  let history = useHistory();
  let location = useLocation();
   
  history.replace(RoutePaths.LOGIN);
  
  
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}