import React, { useState, useCallback, useEffect } from 'react';
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
import Olap from '../Reports';
import { REPORTS } from '../../socket/events';

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
        {/* <ListItem button onClick={this.handleClickopenGrab}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <Grabaciones open={this.state.openGrabaciones} onClose={this.handleClose}/>
          <ListItemText primary="Grabaciones" />
        </ListItem> */}
      </div>
    );
  }
}

function SecondaryListItems() {

  const [open, setOpen] = useState(false)

  // useEffect(() => {
  //   console.log('Cambio open: ', open)
  //   return () => {
  //     console.log('Matando listitem')
  //   };
  // }, [open])

  const openForm=useCallback(
    (i) => {
      setOpen(i)
    },
    [],
  )

  return (
    <div>
      <ListSubheader inset>Reportes</ListSubheader>
      {REPORTS.map((r, i) => {
        return (
          <ListItem button key={i} onClick={()=>openForm(i)}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={r.title} />
            <Olap event={r} open={i===open} onClose={()=>openForm(false)} />
          </ListItem>

        );

      })}
    </div>
  )
}


export { MainListItems, SecondaryListItems };