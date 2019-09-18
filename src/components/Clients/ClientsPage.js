import React from 'react';
import PropTypes from 'prop-types';
import ss from 'socket.io-stream';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import ClientsListDT from './ClientsListDT';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%'
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
    height: '90/*  */%',
  },
  MapContainer: {
    height: '90%',
    width: '100%'
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});


class ClientsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      data: [],
      loading:true,
    };
    this.timer = 0;

  }


  consumirData = (rows) => {
    this.setState({ data: rows });
  }

  


  componentDidMount = () => {
    console.log('montado Eventos');
    socketcli.traeClientes();
    // this.timer = setInterval(() => {
    //   // console.log('ejecutando traeEventosMT');
    //   socketcli.traeClientes();
    // }, 60000);
    socketcli.consumeClientes(this.consumirData);
  }

  componentWillUnmount = () => {
    console.log('matando Eventos');
    // clearInterval(this.timer);
  }



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={24} className={classes.tableContainer}>
            <Grid item xs={12} >
              <div className={classes.tableContainer}>
                <ClientsListDT data={this.state.data} />
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

ClientsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientsPage);