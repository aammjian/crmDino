import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Wizard from './components/Wizard'
// import Cards from './components/Cards'
import Dashbord from './views/layouts/dashbord'
import Login from './views/layouts/login'
// import ScrollToTop from './components/ScrollTop'
import Lists from './lists';
export default props => (
    <HashRouter>
      {/* <ScrollToTop> */}
        <Switch>
          <Route exact path='/' component={ Dashbord } />
          <Route exact path='/lists' component={ Lists } />
          {/* <Route exact path='/dashboard' component={ Dashboard } /> */}
          <Route exact path='/login' component={ Login } />
          {/* <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } /> */}
        </Switch>
      {/* </ScrollToTop> */}
    </HashRouter>
  )