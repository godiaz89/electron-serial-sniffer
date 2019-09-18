import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import NoDevCallsList from './NoDevCallsList';
import LostCalls from './LostCalls';
import IncomingCalls from './IncomingCalls';
//import OutgoingCalls from './OutgoingCalls';
import { Grid } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import moment from 'moment';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    //height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    margin: 2,
  },
  tableContainer: {
    display: 'flex',
    height: 320,
  },
  tableContainerLLENT: {
    display: 'flex',
    height: 700,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class CallsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dataLostCalls: [],
      dataNoDevCall: [],
      dataIncomingCalls: [],
      dataOutgoingCalls: []
    };

  }

  consumirDataLostCalls = (rows) => {
    this.setState({ dataLostCalls: rows });
    console.log(this.state.dataLostCalls);
  }

  consumirDataNoDev = (rows) => {
    this.setState({ dataNoDevCall: rows });
    console.log(this.state.dataNoDevCall);
  }

  consumirDataInCalls = (rows) => {
    this.setState({ dataIncomingCalls: rows });
    console.log(this.state.dataIncomingCalls);
  }

  consumirDataOutCalls = (rows) => {
    this.setState({ dataOutgoingCalls: rows });
    console.log(this.state.dataOutgoingCalls);
  }


  componentDidMount = () => {
    console.log('montado Eventos');
    socketcli.traeLLamadaPerdidas(moment().format('YYYY-MM-DD'));
    socketcli.traeLLamadaPerdidaSinDev(moment().format('YYYY-MM-DD'));
    socketcli.traeIncomingCalls();
    // socketcli.traeOutgoingCalls();
    this.timer = setInterval(() => {
      //console.log('ejecutando traeLLamadaPerdidaSinDev');
      socketcli.traeLLamadaPerdidas(moment().format('YYYY-MM-DD'));
      socketcli.traeLLamadaPerdidaSinDev(moment().format('YYYY-MM-DD'));
      socketcli.traeIncomingCalls();
      // socketcli.traeOutgoingCalls();
    }, 60000);
    socketcli.consumeLLamadasPerdidas(this.consumirDataLostCalls);
    socketcli.consumeLLamadasPerdidasSinDev(this.consumirDataNoDev);
    socketcli.consumeIncomingCalls(this.consumirDataInCalls);
    // socketcli.consumeOutgoingCalls(this.consumirDataOutCalls);
  }


  componentWillUnmount = () => {
    console.log('matando Eventos');
    clearInterval(this.timer);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={4}>
            <Grid item xs={6} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h5" gutterBottom component="h3">
                  LLamadas Perdidas no devueltas
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                  <div className={classes.tableContainer}>
                    <NoDevCallsList data={this.state.dataNoDevCall} />
                  </div>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h5" gutterBottom component="h3">
                  LLamadas Perdidas
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                  <div className={classes.tableContainer}>
                    <LostCalls data={this.state.dataLostCalls} />
                  </div>
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={6} spacing={12}>
              <Grid item>
                <Typography variant="h5" gutterBottom component="h3">
                  LLamadas Entrantes
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                  <div className={classes.tableContainerLLENT}>
                    <IncomingCalls data={this.state.dataIncomingCalls} />
                  </div>
                </Typography>
              </Grid>
              {/* <Grid item xs={6}>
              <Typography variant="h5" gutterBottom component="h3">
                LLamadas Salientes
                </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <div className={classes.tableContainer}>
                  <OutgoingCalls data={this.state.dataOutgoingCalls} />
                </div>
              </Typography>
            </Grid> */}
            </Grid>
          </Grid>


        </main>
      </div>
    );
  }
}

CallsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CallsPage);
