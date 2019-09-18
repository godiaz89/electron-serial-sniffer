import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import genXLSX from '../../xlsx/xlsx';
import * as socketcli from '../../socket/cliente';
import moment from 'moment';


const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

const REPNAME='OLAPZAS';

export default class ZASOLAP extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[],mes:moment().format('YYMM')};
      }
    
    handleChangeInput=(e)=>{
        console.log('estado: ',this.state.mes,' value: ',e.target.value);
        this.setState({mes:moment(e.target.value).format('YYMM')});
        console.log('estado final: ',this.state.mes);
    }
    
    genOLAPZAS=()=>{
        console.log(this.state.mes);
        socketcli.genOLAPZAS(this.state.mes,result=>{
          genXLSX(result,REPNAME);
    
        });
    }
  
    render() {
      return (
        <div>
          <Dialog
            open={this.props.open}
            onClose={this.props.onClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">ZONAS ANULADAS SEMANAL</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Este reporte muestra los abonados con anulaciones de zonas en la semana.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="mes"
                label="Ingrese mes"
                type="month"
                fullWidth
                onChange={this.handleChangeInput}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.genOLAPZAS} color="primary">
                Generar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }