import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../Charts/SimpleLineChart';
import SimplePieChart from '../Charts/SimplePieChart';
import { Grid } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import ConnectedUsers from './ConnectedUsers';
import EventosxOpBarChart from './EventosxOpBarChart';
import * as eventos from '../../socket/events'
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
    marginLeft: -22,
  },
  tableContainer: {
    display: 'flex',
    height: 280,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Dashboard extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        connectedUsers:[],
        eventosxop:[],
        eventosxopmen:[]
      };
      this.timer=null;
      this.stateUsers=this.stateUsers.bind(this);
      
  }
  

  stateUsers=(rows)=>{
    //console.log('stateUsers ejecutandose con:', rows);
    this.setState({connectedUsers:rows});
    // console.log('estado despues del stateUsers: ', this.state.connectedUsers);
  }

  stateEventosxOp=(rows)=>{
    //console.log('stateEventosxOp ejecutandose con:', rows);
    this.setState({eventosxop:rows[0]});
    // console.log('estado despues del stateUsers: ', this.state.connectedUsers);
  }
  stateEventosxOpMensual=(rows)=>{
    //console.log('stateEventosxOp ejecutandose con:', rows);
    this.setState({eventosxopmen:rows[0]});
    // console.log('estado despues del stateUsers: ', this.state.connectedUsers);
  }
  
  componentDidMount=()=>{
    console.log('montado dashboard');
    socketcli.traeUsers();
    socketcli.trae(eventos.EVENTOSXOPDIARIO,moment().format('YYMM'));
    socketcli.traeEventosxOpMensual(moment().format('YYMM'));
    this.timer=setInterval(()=>{
      // console.log('ejecutando traeEventosMT');
      socketcli.traeUsers();
      //socketcli.traeEventosxOpMensual(moment().format('YYMM'));
    },120000);
    socketcli.consumirUsers(this.stateUsers);
    socketcli.consumeEventosxOp(this.stateEventosxOp);
    socketcli.consumeEventosxOpMensual(this.stateEventosxOpMensual);
  }


  componentWillUnmount=()=>{
    console.log('matando dashboard');
    clearInterval(this.timer);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={24}>
            <Grid item xs={6}>
                <Typography variant="h5" gutterBottom component="h3">
                    Operadores conectados 
                </Typography>
                <div className={classes.tableContainer}>
                    <ConnectedUsers data={this.state.connectedUsers} />
                </div>               
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5" gutterBottom component="h3">
                    Eventos por operador diario
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <EventosxOpBarChart data={this.state.eventosxop} />
                </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom component="h3">
                    Eventos por operador mensual
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <EventosxOpBarChart data={this.state.eventosxopmen} />
                </Typography>
            </Grid>
          </Grid>    

        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
