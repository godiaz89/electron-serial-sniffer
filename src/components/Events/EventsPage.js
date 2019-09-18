import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import Map from '../Events/EventsMaps';
import ZADList from './ZADList';
import ZADListDT from './ZADListDT';
import ZASList from './ZASList';
import ZASListDT from './ZASListDT';
import moment from 'moment';
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
    height: 500,
  },
  MapContainer: {
    height:500,
    width: '100%'
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});


class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dataZAS: [],
      dataZAD: [],
      dataMarkers:[]
    };
    this.timer = 0;

  }


  consumirDataZAS = (rows) => {
    this.setState({ dataZAS: rows[0] });
  }

  consumirDataZAD = (rows) => {
    this.setState({ dataZAD: rows[0] });
  }

  consumirDataZMarkers = (rows) => {
    this.setState({ dataMarkers: rows[0] });
    //console.log('MARCADORES: ',this.state.dataMarkers);
  }



  componentDidMount = () => {
    console.log('montado Eventos');
    socketcli.traeZAD();
    socketcli.traeZAS(moment().format('YYMM'));
    socketcli.traeLatLonMap();
    this.timer = setInterval(() => {
      // console.log('ejecutando traeEventosMT');
      socketcli.traeZAD();
      socketcli.traeZAS(moment().format('YYMM'));
      socketcli.traeLatLonMap();
    }, 60000);
    socketcli.consumeZAD(this.consumirDataZAD);
    socketcli.consumeZAS(this.consumirDataZAS);
    socketcli.consumeLatLonMap(this.consumirDataZMarkers);
  }

  componentWillReceiveProps(nextProps) {
    
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
          <Grid container spacing={24} className={classes.MapContainer}>
            <Grid item xs={12} className={classes.MapContainer}>
              <Typography variant="h5" gutterBottom component="h3">
                Mapa de Faltas de Testeo y 220V
              </Typography>
              {/* <div className={classes.MapContainer}> */}
              <Map data={this.state.dataMarkers} className={classes.MapContainer}/>
              {/* </div> */}
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom component="h3">
                Zonas anuladas en el dia
              </Typography>
              <div className={classes.tableContainer}>
                <ZADListDT data={this.state.dataZAD} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom component="h3">
                Zonas anuladas en la semana
              </Typography>
              <div className={classes.tableContainer}>
                <ZASListDT data={this.state.dataZAS} />
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

EventsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventsPage);