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



class ZASList extends React.Component {



  render(){
    const { classes } = this.props;
    // console.log('Log render ZASList: ',this.props.data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
            Cliente
            </TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Detalles</TableCell>
            <TableCell align="center">Zona</TableCell>
            <TableCell align="center">Fecha y Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.data!==undefined?
              this.props.data.map((n,index)=>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                    {n.ABONADO}
                    </TableCell>
                    <TableCell align="center">{n.NOMBRE}</TableCell>
                    {/* <TableCell align="center">{n.datosevrl}</TableCell> */}
                    <TableCell align="center">{n.DETALLE}</TableCell>
                    <TableCell align="center">{n.ZONA}</TableCell>
                    <TableCell align="center">{n.fechahora}</TableCell>
                </TableRow>
                )
            :
            <TableRow>
              <TableCell align="center">Cargando</TableCell>
              <TableCell align="center">Cargando</TableCell>
              <TableCell align="center">Cargando</TableCell>
              <TableCell align="center">Cargando</TableCell>
              <TableCell align="center">Cargando</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
  );
  }
   
}

ZASList.propTypes = {
  classes: PropTypes.object.isRequired,
};

ZASList.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(ZASList);
