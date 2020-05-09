import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import DateMomentUtils from '@date-io/moment';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/material/Home/Home';
import Login from './components/material/Login/Login';
import * as ROUTES from './constants/routes';
//import { withAuthentication } from '../Session';

const deftheme = createMuiTheme()

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={deftheme}>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <Router>
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.HOME} component={Home} />
        </Router>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Provider>

);

export default App;
//export default withAuthentication(App);