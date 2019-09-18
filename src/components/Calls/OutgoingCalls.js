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



class OutgoingCalls extends React.Component {



  render(){
    const { classes } = this.props;
    console.log('Log render OutgoingCalls: ',this.props.data);

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
                    {n.operador}
                    </TableCell>
                    <TableCell align="center">{n.numero}</TableCell>
                    {/* <TableCell align="center">{n.datosevrl}</TableCell> */}
                    <TableCell align="center">{n.fecha}</TableCell>
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

OutgoingCalls.propTypes = {
  classes: PropTypes.object.isRequired,
};

OutgoingCalls.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(OutgoingCalls);
