import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};



class ClientsList extends React.Component {



  render(){
    const { classes } = this.props;
    // console.log('Log render ClientsList: ',this.props.data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
            Cliente
            </TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Domicilio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.data!==undefined?
              this.props.data.map((n,index)=>
                <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                    {n.objetivo=='FIJO'?
                        <FontAwesomeIcon  icon={Icon.faHome} size='lg'></FontAwesomeIcon>
                        :
                    <FontAwesomeIcon  icon={Icon.faCar} size='lg'></FontAwesomeIcon>} &nbsp; {n.cliente}
                    </TableCell>
                    <TableCell align="center">{n.nombre}</TableCell>
                    <TableCell align="center">{n.calle+' '+n.numero+', '+n.ciudad}</TableCell>
                </TableRow>
                )
            :
            <TableRow>
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

ClientsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

ClientsList.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(ClientsList);
