import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import EventosxOpOLAP from '../Reports/EventosxOpOLAP';
import TMROLAP from '../Reports/TRMOLAP';
import MSOLAP from '../Reports/MSOLAP';
import MMOLAP from '../Reports/MMOLAP';
import ZASOLAP from '../Reports/ZASOLAP';
import ZADOLAP from '../Reports/ZADOLAP';
import FAxCOLAP from '../Reports/FAxCOLAP';
import EventosMTOLAP from '../Reports/EventosMTOLAP';
import LiLoOLAP from '../Reports/LiLoOLAP';
import LLentOLAP from '../Reports/LLentOLAP';
import Grabaciones from '../Calls/Grabaciones';
import MSAOLAP from '../Reports/MSAOLAP';

class MainListItems extends React.Component {



  render() {
    return (
      <div>
        <ListItem button component={Link} to={ROUTES.DASHBOARD}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.CALLS}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="LLamadas" />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.EVENTS}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Eventos" />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.CLIENTS}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.USERS}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Operadores" />
        </ListItem>
        {/* <ListItem button component={Link} to={ROUTES.SUPPORT}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Soporte" />
        </ListItem> */}
      </div>
    );
  }
}


class SecondaryListItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openExO: false,
      openEMT:false,
      openTMR: false,
      openMS: false,
      openMM: false,
      openZAS: false,
      openZAD: false,
      openFAxC: false,
      openLiLo: false,
      openLLEnt: false,
      openMSA:false,
      openGrabaciones: false
    };
  }

  handleClickopenExO = () => {
    this.setState({ openExO: true });
  };

  handleClickopenEMT = () => {
    this.setState({ openEMT: true });
  };

  handleClickopenTMR = () => {
    this.setState({ openTMR: true });
  };
  handleClickopenMS = () => {
    this.setState({ openMS: true });
  };
  handleClickopenMM = () => {
    this.setState({ openMM: true });
  };
  handleClickopenZAS = () => {
    this.setState({ openZAS: true });
  };
  handleClickopenZAD = () => {
    this.setState({ openZAD: true });
  };

  handleClickopenFAxC = () => {
    this.setState({ openFAxC: true });
  };

  handleClickopenLiLo = () => {
    this.setState({ openLiLo: true });
  };

  handleClickopenLLEnt = () => {
    this.setState({ openLLEnt: true });
  };

  handleClickopenMSA = () => {
    this.setState({ openMSA: true });
  };

  handleClickopenGrab = () => {
    this.setState({ openGrabaciones: true });
  };

  handleClose = () => {
    this.setState({
      openExO: false,
      openEMT:false,
      openTMR: false,
      openMS: false,
      openMM: false,
      openZAS: false,
      openZAD: false,
      openFAxC: false,
      openLiLo: false,
      openLLEnt: false,
      openMSA:false,
      openGrabaciones: false
    });
  };

  render() {
    return (
      <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button onClick={this.handleClickopenExO}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Eventos p/Operador" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenEMT}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Eventos Mal tratados" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenTMR}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Tiempo Respuesta Mensual" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenMS}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Auditoria de movil semanal" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenMM}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Auditoria de movil mensual" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenZAS}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Zonas anuladas semanal" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenZAD}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Zonas anuladas diaria" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenFAxC}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Falsas Alarmaspor Cuenta" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenLLEnt}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Monitoreo de llamadas entrantes" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenLiLo}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Avaya Log in Log out" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenMSA}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Minutos sin actividad" />
        </ListItem>
        <ListItem button onClick={this.handleClickopenGrab}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Grabaciones" />
        </ListItem>
        <EventosxOpOLAP open={this.state.openExO} onClose={this.handleClose} />
        <EventosMTOLAP open={this.state.openEMT} onClose={this.handleClose} />
        <TMROLAP open={this.state.openTMR} onClose={this.handleClose} />
        <MSOLAP open={this.state.openMS} onClose={this.handleClose} />
        <MMOLAP open={this.state.openMM} onClose={this.handleClose} />
        <ZASOLAP open={this.state.openZAS} onClose={this.handleClose} />
        <ZADOLAP open={this.state.openZAD} onClose={this.handleClose} />
        <FAxCOLAP open={this.state.openFAxC} onClose={this.handleClose} />
        <Grabaciones open={this.state.openGrabaciones} onClose={this.handleClose}/>
        <LiLoOLAP  open={this.state.openLiLo} onClose={this.handleClose} />
        <LLentOLAP open={this.state.openLLEnt} onClose={this.handleClose}/>
        <MSAOLAP open={this.state.openMSA} onClose={this.handleClose}/>
      </div>
    );
  }
}


export { MainListItems, SecondaryListItems };