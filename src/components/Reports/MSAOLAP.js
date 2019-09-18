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

const REPNAME='OLAPMSA';

export default class MSAOLAP extends React.Component {
    constructor(props){
        super(props);
        this.state={data:[],
            desde:moment().format('YYYY-MM-DD'),
            hasta:moment().format('YYYY-MM-DD')
        };
      }
    
    handleChangeInputDesde=(e)=>{
        //console.log('estado: ',this.state.desde,' value: ',e.target.value);
        this.setState({desde:moment(e.target.value).format('YYYY-MM-DD')});
        console.log('estado final: ',this.state.desde);
    }

    handleChangeInputHasta=(e)=>{
        //console.log('estado: ',this.state.hasta,' value: ',e.target.value);
        this.setState({hasta:moment(e.target.value).format('YYYY-MM-DD')});
        console.log('estado final: ',this.state.hasta);
    }
    
    genMSAOLAP=()=>{
        console.log('genmsaolap lanzado');
        socketcli.genOLAPMSAct({desde:this.state.desde,hasta:this.state.hasta},result=>{
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
            <DialogTitle id="form-dialog-title">Avaya Minutos sin actividad</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Este reporte muestra los horarios de logueo y deslogueo con el respectivo tiempo de descanso de cada operador.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="desde"
                label="Ingrese desde"
                type="date"
                fullWidth
                onChange={this.handleChangeInputDesde}
              />
              <TextField
                autoFocus
                margin="dense"
                id="desde"
                label="Ingrese Hasta"
                type="date"
                fullWidth
                onChange={this.handleChangeInputHasta}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.onClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={this.genMSAOLAP} color="primary">
                Generar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }