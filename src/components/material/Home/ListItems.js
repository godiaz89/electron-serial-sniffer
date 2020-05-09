import React, { useState, useCallback, useEffect } from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader, CircularProgress, LinearProgress, Tooltip } from '@material-ui/core';
import { Dashboard, Call, Map, PeopleAlt, People, BarChart, Assignment, CallReceived, FilterDrama } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';


export function MainListItems() {


  const [open, setOpen] = useState(false)

  const openGrab = useCallback(
    (i) => {
      setOpen(i)
    },
    [],
  )

  return (
    <div>
      <ListItem button component={Link} to={ROUTES.DASHBOARD}>
        <Tooltip title='Dashboard'>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </div>
  )
}

