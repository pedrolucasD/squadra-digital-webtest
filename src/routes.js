import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Characters from './pages/Characters'
import Planets from './pages/Planets'


const Routes = () => {
  return(
    <Switch>
      <Route path="/characters" exact component={ Characters } />
      <Route path="/planets" exact component={ Planets } />
    </Switch>
  )
}

export default Routes