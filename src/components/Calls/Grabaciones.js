import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import * as socketcli from '../../socket/cliente';
import ListaGrab from './ListaGrab';
import moment from 'moment';


const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

export default class Grabaciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], desde: moment(), hasta: moment(), operador: null };
    }

    handleChangeDesde = (e) => {
        //console.log('estado: ', this.state.mes, ' value: ', e.target.value);
        this.setState({ desde: moment(e.target.value).format('YYYYMMDD hhmmss') });
        console.log('estado final: ', this.state.desde);
    }

    handleChangeHasta = (e) => {
        //console.log('estado: ', this.state.mes, ' value: ', e.target.value);
        this.setState({ hasta: moment(e.target.value).format('YYYYMMDD hhmmss') });
        console.log('estado final: ', this.state.hasta);
    }

    handleChangeOp = (e) => {
        //console.log('estado: ', this.state.mes, ' value: ', e.target.value);
        this.setState({ operador: e.target.value });
        console.log('estado final: ', this.state.operador);
    }


    stateData = (rows) => {
        //console.log('stateEventosxOp ejecutandose con:', rows);
        this.setState({ data: rows });
        console.log('estado despues del stateData: ', this.state.data);
    }

    handleClick = () => {
        socketcli.traeGrabaciones([this.state.desde, this.state.hasta]);
    }

    componentDidMount = () => {
        socketcli.traeGrabaciones([moment().subtract(1, 'days').format('YYYYMMDD HHmmss'),
        moment().format('YYYYMMDD HHmmss')]);
        socketcli.consumeGrabaciones(this.stateData);
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth='xl'
                >
                    <DialogTitle id="form-dialog-title">Grabaciones</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Listado de grabaciones de llamadas
                </DialogContentText>
                        <TextField
                            autoFocus
                            margin="normal"
                            id="desde"
                            //label="Desde"
                            type="datetime-local"
                            // fullWidth
                            helperText='Desde'
                            onChange={this.handleChangeDesde}
                        />
                        <TextField
                            autoFocus
                            margin="normal"
                            id="hasta"
                            helperText="Hasta"
                            type="datetime-local"
                            // fullWidth
                            onChange={this.handleChangeHasta}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="operador"
                            label="Operador"
                            type="search"
                            placeholder='Busqueda por operador'
                            fullWidth
                            onChange={this.handleChangeOp}
                        />
                        <ListaGrab data={this.state.data.rows} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onClose} color="primary">
                            Cancelar
                </Button>
                        <Button onClick={this.handleClick} color="primary">
                            Generar
                </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}