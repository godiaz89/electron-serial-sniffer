import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import * as socketcli from '../../socket/cliente';
import UsersList from './UsersList';

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
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class UsersPage extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        open: true,
        data:[]
      };

  }
  

  // data=[
  //     {nombre:"SOLEDAD",rol:"TELEFONISTA"},
  //     {nombre:"MARIO",rol:"OPERADOR PRINCIPAL"},
  //     {nombre:"MATIAS",rol:"SUPERVISOR"},
  //     {nombre:"OSCAR",rol:"SUPERVISOR"},
  //     {nombre:"MLEAL",rol:"SUPERVISOR"},
  //     {nombre:"VALERIA",rol:"TELEFONISTA"},
  //     {nombre:"FACUNDO",rol:"SUPERVISOR"},
  //     {nombre:"MDIPILATO",rol:"OPERADOR PRINCIPAL"},
  //     {nombre:"SEBASTIAN",rol:"OPERADOR PRINCIPAL"},
  // ];

  consumirData=(rows)=>{
    this.setState({data:rows});
  }
  
  componentDidMount=()=>{
    socketcli.traeUserList();
    // this.timer=setInterval(socketcli.traeUserList(),60000);
    socketcli.consumirUserList(this.consumirData);
  }

  // componentWillMount=()=>{
  //   clearInterval(this.timer);
  // }

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
                    Pagina de  gestion de usuarios
                </Typography>
                <UsersList data={this.state.data}/>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

UsersPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersPage);