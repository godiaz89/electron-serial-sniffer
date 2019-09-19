import React, { useState } from 'react';
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
import * as eventos from '../../socket/events';
import moment from 'moment';
import { DatePicker} from "@material-ui/pickers";


const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

const REPNAME = 'OLAPEXO';




export default function EventosxOpOLAP(props) {

  const [mes, setMes] = useState(new Date())

  
  
  function getEventosxOp(params) {
    console.log(moment(mes).format('YYMM'));
    socketcli.sendReport(eventos.OLAPEXO,moment(mes).format('YYMM'), result => {
      genXLSX(result, REPNAME);

    });
  }
  
  return (
    <div>
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Eventos por operador</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Este reporte muestra los eventos cerrados en el mes por cada operador.
              </DialogContentText>
            
            <DatePicker
              variant="inline"
              openTo="year"
              views={["year", "month"]}
              label="Año y mes"
              helperText="Seleccionar mes para el reporte"
              value={mes}
              onChange={setMes}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cancelar
              </Button>
            <Button onClick={getEventosxOp} color="primary">
              Generar
              </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}
