import React, { useState } from 'react';
import { DialogTitle, Dialog, DialogContentText, DialogContent, DialogActions, Button } from '@material-ui/core';
import genXLSX from '../../xlsx/xlsx';
import * as socketcli from '../../socket/cliente';
import * as eventos from '../../socket/events';
import moment from 'moment';
import { DatePicker } from "@material-ui/pickers";


export default function Olap(props) {

  const [mes, setMes] = useState(new Date())
  const [hasta, setHasta] = useState(new Date())


  function genReport(params) {
    //console.log(moment(mes).format('YYMM'));

    if (props.event.engine === 'mysql') {
      socketcli.sendReport(props.event, moment(mes).format('YYMM'), result => {
        genXLSX(result, props.event.filename);

      });
    }
    else {
      socketcli.sendReport(props.event, { desde: moment(mes).format('YYYY-MM-DD'), hasta: moment(mes).format('YYYY-MM-DD') }, result => {
        genXLSX(result, props.event.filename);

      });
    }

  }

  var handleClose=()=>{
    props.onClose(props.position)
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
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
            label={props.event.engine==='mysql'?'Año y mes':'Desde'}
            helperText="Seleccionar mes para el reporte"
            value={mes}
            onChange={setMes}
          />
          {
            props.event.engine === 'mssql' &&
             <DatePicker
              variant="inline"
              openTo="year"
              views={["year", "month"]}
              label="Hasta"
              helperText="Seleccionar mes para el reporte"
              value={hasta}
              onChange={setHasta}
            />
          }

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
