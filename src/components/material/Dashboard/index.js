import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Typography, Grid, Card, CardContent, Paper, Dialog, DialogContent, Tooltip, IconButton, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors'
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream, faBroom } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { startSniffing,stopSniffing, cleanSniffing } from '../../../redux/actions'
import AvailablePorts from './AvailablePortsList';
import DataViewer from './DataViewer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    //height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: 8,
    margin: 8
  },
  weather: {
    marginBottom: 8
  },
  Notes: {
    width: '100%',
    overflowX: 'auto',
    padding: 8
  },
  title: {
    display: 'flex',
    alignItems: 'baseline'
  }
}));




function Dashboard({ availablePorts, startSniffing,stopSniffing, isSniffing,cleanSniffing }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <AvailablePorts />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color={isSniffing?'secondary':'primary'}
              onClick={isSniffing?() => stopSniffing():()=>startSniffing(availablePorts.filter(p => p.checked))}
              className={classes.button}
              endIcon={<FontAwesomeIcon icon={faStream} />}
            >
              {isSniffing?'Stop Sniffing':'Start Sniffing'}
            </Button>
            <Button
              variant="contained"
              color='primary'
              onClick={()=>cleanSniffing()}
              className={classes.button}
              endIcon={<FontAwesomeIcon icon={faBroom} />}
            >
              Clear
            </Button>
            <DataViewer />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}



export default connect(({ SerialPorts }) => { return { availablePorts: SerialPorts.availablePorts, isSniffing:SerialPorts.isSniffing } }, { startSniffing, stopSniffing,cleanSniffing })(Dashboard);
