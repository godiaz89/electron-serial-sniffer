import React, { useState } from 'react';
import {DialogTitle,Dialog,DialogContentText,DialogContent,DialogActions,Button} from '@material-ui/core';
import genXLSX from '../../xlsx/xlsx';
import * as socketcli from '../../socket/cliente';
import * as eventos from '../../socket/events';
import moment from 'moment';
import { DatePicker} from "@material-ui/pickers";


  export default function Olap(props) {
  
    const [mes, setMes] = useState(new Date())
  
    
    
    function genReport(params) {
      //console.log(moment(mes).format('YYMM'));
      socketcli.sendReport(props.event,moment(mes).format('YYMM'), result => {
        genXLSX(result, props.event.filename);
  
      });
    }
    
    return (
      <div>
          <Dialog
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{props.event.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {props.event.comments}
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
              <Button onClick={genReport} color="primary">
                Generar
                </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
  }
  