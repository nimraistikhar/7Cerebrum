import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './component1/Home';
import Login from './component1/Login';
import Singup from './component1/Singup';
import Team from './component1/Team';
import Contact from './component1/Contact';

import Submission from './component2/Submission-staff'
import Dashboard from './component2/Dashboard'

import SubmissionUser from './component3/Submission-user'
import Updates from './component3/Updates'
import Submit from './component3/Submit-art'
import SubmitMusic from './component3/SubmitMusic'
import Account from './component3/Account';
import Join from './component3/Join'
import ContactUser from './component3/Contact'
import TeamUser from './component3/Team'

import { GlobalStyles } from './globalstyles';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={SubmissionUser} />
          <Route path="/updates" component={Updates} />
          <Route path="/submit" component={Submit} />
          <Route path="/music" component={SubmitMusic} />
          <Route path="/account" component={Account} />
          <Route path="/join" component={Join} />
          <Route path="/contact" component={ContactUser} />
          <Route path="/teamUser" component={TeamUser} />

          <Route exact path="/SubmissionStaff" component={Submission} />
          <Route path="/dashboard" component={Dashboard} />

          <Route exact path="/logoutHome" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/signup"><Singup/> </Route>
          <Route path="/team" component={Team} />
          <Route path="/contactLogOut" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App