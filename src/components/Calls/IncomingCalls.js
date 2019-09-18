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



class IncomingCalls extends React.Component {



  render(){
    const { classes } = this.props;
    console.log('Log render IncomingCalls: ',this.props.data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
            Operador
            </TableCell>
            <TableCell align="center">Numero</TableCell>
            {/* <TableCell align="center">Comentario</TableCell> */}
            <TableCell align="center">Fecha y Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array.isArray(this.props.data)&&this.props.data.length>0?
              this.props.data.map((n,index)=>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                    {n.Operador}
                    </TableCell>
                    <TableCell align="center">{n.origen}</TableCell>
                    {/* <TableCell align="center">{n.datosevrl}</TableCell> */}
                    <TableCell align="center">{n.FechaHora}</TableCell>
                </TableRow>
                )
            :
            <TableRow>
              <TableCell align="center">Sin llamadas</TableCell>
              <TableCell align="center">Sin llamadas</TableCell>
              <TableCell align="center">Sin llamadas</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
  );
  }
   
}

IncomingCalls.propTypes = {
  classes: PropTypes.object.isRequired,
};

IncomingCalls.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(IncomingCalls);
