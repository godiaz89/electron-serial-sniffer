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



class SimpleTable extends React.Component {



  render(){
    const { classes } = this.props;
    

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {console.log('Log en el render de la tabla: ',this.props.data)}
            {
              this.props.data!=undefined && this.props.data[0]? 
              Object.keys(this.props.data[0]).map(key=><TableCell align="center">{key}</TableCell>)
              :
              <TableRow>
                <TableCell align="center">Cargando</TableCell>
              </TableRow>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.data!=undefined?
              this.props.data.map((n,index)=>{
                const c=Object.values(n);
                return( <TableRow key={index}>
                          {c.map((f,index)=>{
                            return index===0?
                            <TableCell component="th" scope="row" align="center">
                            {f}
                            </TableCell>
                            :
                            <TableCell align="center">{f}</TableCell>

                          })}
                        </TableRow>)
              })
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

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

SimpleTable.defaultProps={
  data:[{id:'0',test:1},{id:'1',test:2}]
};

export default withStyles(styles)(SimpleTable);
