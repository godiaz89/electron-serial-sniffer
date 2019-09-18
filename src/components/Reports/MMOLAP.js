import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
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

const REPNAME='OLAPMM';

export default class MMOLAP extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[],mes:moment().format('YYMM')};
      }

    
    genOLAPMM=()=>{
        socketcli.genOLAPMM(result=>{
          genXLSX(result,REPNAME);
    
        });
    }
   //TODO mejorar descripcion
    render() {
      return (
        <div>
          <Dialog
            open={this.props.open}
            onClose={this.props.onClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">MOVIL AUDITORIA MENSUAL</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Este reporte muestra la auditoria mensual de moviles.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.genOLAPMM} color="primary">
                Generar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }