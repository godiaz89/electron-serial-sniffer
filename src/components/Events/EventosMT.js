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



class EventosMT extends React.Component {



  render(){
    const { classes } = this.props;
    // console.log('Log render eventosmt: ',this.props.data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
            Cliente
            </TableCell>
            <TableCell align="center">Detalles</TableCell>
            {/* <TableCell align="center">Comentario</TableCell> */}
            <TableCell align="center">Cedulacion</TableCell>
            <TableCell align="center">Operador</TableCell>
            <TableCell align="center">Accion</TableCell>
            <TableCell align="center">Fecha y Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.data!==undefined?
              this.props.data.map((n,index)=>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                    {n.cliente}
                    </TableCell>
                    <TableCell align="center">{n.detalle}</TableCell>
                    {/* <TableCell align="center">{n.datosevrl}</TableCell> */}
                    <TableCell align="center">{n.cedulacion}</TableCell>
                    <TableCell align="center">{n.usuario}</TableCell>
                    <TableCell align="center">{n.accion}</TableCell>
                    <TableCell align="center">{n.fechahora}</TableCell>
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

EventosMT.propTypes = {
  classes: PropTypes.object.isRequired,
};

EventosMT.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(EventosMT);
