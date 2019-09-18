import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DateMomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import * as ROUTES from './constants/routes';
import CallsPage from './components/Calls/CallsPage';
import EventsPage from './components/Events/EventsPage';
import Dashboard from './components/Dashboard/Dashboard';
import SupportPage from './components/Support/SupportPage';
//import { withAuthentication } from '../Session';

const App = () => (
  <MuiPickersUtilsProvider utils={DateMomentUtils}>
    <Router>
      <div>
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.CALLS} component={CallsPage} />
        <Route path={ROUTES.EVENTS} component={EventsPage} />
        <Route path={ROUTES.SUPPORT} component={SupportPage} />
      </div>
    </Router>
  </MuiPickersUtilsProvider>

);

export default App;
//export default withAuthentication(App);