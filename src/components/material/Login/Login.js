import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
//import BackGroundImage from "../../images/bkimg.jpg";
import BackGroundImage from "../../images/Monitoring.jpg";
import LogoImg from '../../images/logo.png';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems:"center",
    },
    backgroundImage: `url(${BackGroundImage})`,
    //backgroundImage:{require('../../images/Transmission-Control-Center-Project.jpg');}
  },
  paper: {
    //marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    opacity:0.7
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  image:{
    height:'auto',
    maxWidth:'100%',
  }
});

const mainBg = {
  backgroundImage: `url(${BackGroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

class Login extends React.Component {


 
  render() {
    const { classes } = this.props;

    return (
      <div style={{ backgroundImage: `url(${BackGroundImage})`, height: '100vh',margin:'0',padding:'0',backgroundSize: 'cover',backgroundPosition: 'center' }} >
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper} >
            <img className={classes.image} src={require("../../images/logo.jpg")} />
            <Typography component="h1" variant="h5">
              Panel Auxiliar Albiero Monitoreo
            </Typography>
            <form className={classes.form}>
              <Button
                component={Link} to={ROUTES.DASHBOARD}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Acceder
          </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);