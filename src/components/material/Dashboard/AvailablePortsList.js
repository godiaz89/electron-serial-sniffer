import React from 'react';
import { connect } from 'react-redux'
import { List, ListItem, ListItemText, ListSubheader, Paper,ListItemIcon,Checkbox, Typography, makeStyles } from '@material-ui/core';
import {updatePort} from '../../../redux/actions'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


function AvailablePortsList({ ports,updatePort }) {
    const classes=useStyles();
    return (
        <Paper>
            <Typography variant='subtitle1'>
            Puertos COM habilitados
            </Typography>
            
            <List className={classes.root}>
                {ports?.map(p =>
                    <ListItem alignItems='flex-start'>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={p.checked}
                                onChange={(e)=>updatePort({...p,checked:e.target.checked})}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={p.path} secondary={p.manufacturer}/>
                    </ListItem>)}
            </List>
        </Paper>
    )
}


export default connect(({ SerialPorts }) => { return { ports: SerialPorts.availablePorts } },{updatePort})(AvailablePortsList)