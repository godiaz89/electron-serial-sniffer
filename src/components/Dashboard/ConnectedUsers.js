import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};



class ConnectedUsers extends React.Component {



  render(){
    const { classes } = this.props;
    

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
                Operador
            </TableCell>
            <TableCell align="center">Rol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.data!==undefined?
              this.props.data.map((n,index)=>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                    {n.Operador}
                    </TableCell>
                    <TableCell align="center">{n.Rol}</TableCell>
                </TableRow>
                )
            :
            <TableRow>
              <TableCell align="center">Cargando</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
  );
  }
   
}

ConnectedUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

ConnectedUsers.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(ConnectedUsers);
