import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogContent from '@material-ui/core/DialogContent';
import Chip from '@material-ui/core/Chip';
import * as socketcli from '../../socket/cliente';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContactos from './TabContactos';
import TabUsuarios from './TabUsuarios';
import TabZonas from './TabZonas'; 
import TabNotas from './TabNotas';
import TabOpor from './TabOpor';

const styles = tema => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        background: '#616161',
        color: '#F5F5F5'
    },
});

class ClientData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            dataUsuarios:[],
            dataZonas:[],
            dataContactos:[],
            dataNotas:[],
            dataOpor:[],
            tabValue: 0
        }
    }

    consumirDatosCliente = (rows) => {
        this.setState({ data: rows[0] });
    }

    consumirUsuariosCliente = (rows) => {
        this.setState({ dataUsuarios: rows[0] });
    }
    consumirZonasCliente = (rows) => {
        this.setState({ dataZonas: rows[0] });
    }
    consumirContactosCliente = (rows) => {
        this.setState({ dataContactos: rows[0] });
    }
    consumirNotasCliente = (rows) => {
        this.setState({ dataNotas: rows[0] });
    }

    consumirOporCliente = (rows) => {
        this.setState({ dataOpor: rows});
    }

    componentDidMount = () => {
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeDatosCliente(this.props.id);
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeContactosCliente(this.props.id);
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeUsuariosCliente(this.props.id);
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeZonasCliente(this.props.id);
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeNotasCliente(this.props.id);
        if (this.props.id !== undefined && this.props.open == true) socketcli.traeOporCliente(this.props.id);
        socketcli.consumeDatosCliente(this.consumirDatosCliente);
        socketcli.consumeContactosCliente(this.consumirContactosCliente);
        socketcli.consumeUsuariosCliente(this.consumirUsuariosCliente);
        socketcli.consumeZonasCliente(this.consumirZonasCliente);
        socketcli.consumeNotasCliente(this.consumirNotasCliente);
        socketcli.consumeOporCliente(this.consumirOporCliente);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeDatosCliente(nextProps.id);
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeContactosCliente(nextProps.id);
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeUsuariosCliente(nextProps.id);
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeZonasCliente(nextProps.id);
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeNotasCliente(nextProps.id);
        if (nextProps !== this.props && nextProps.id !== undefined && nextProps.open == true) socketcli.traeOporCliente(nextProps.cardcode);
        // socketcli.consumeDatosCliente(this.consumirDatosCliente);
    }

    handleChangeTab = (e, newTab) => {
        this.setState({ tabValue: newTab });
    }

    handleChangeIndex = (index) => {
        this.setState({ tabValue: index });
    }

    render() {
        const { classes } = this.props;
        //console.log('render del clientdata: ',this.props.data!==undefined&&this.props.data.cliente,
        //this.props.data!==undefined&&this.props.data.nombre,this.props.data!==undefined&&this.props.data.ciudad);
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth='xl'

                >
                    <DialogTitle id="form-dialog-title" >
                        Datos de cliente {this.state.data.cliente}
                    </DialogTitle>
                    <DialogContent >
                        <DialogContentText>
                            Datos del abonado {this.state.data.enviaMovil == 'Y' &&
                                <Chip
                                    label="Envia Movil"
                                    avatar={<Avatar><FontAwesomeIcon icon={Icon.faCar} size='lg' /></Avatar>}
                                />}
                        </DialogContentText>
                        <Grid container spacing={8} >
                            <Grid item xs={1}>Cliente: </Grid>
                            <Grid item xs={1} >
                                <Paper className={classes.paper}>{this.state.data.cliente}</Paper>
                            </Grid>
                            <Grid item xs={1}>Nombre: </Grid>
                            <Grid item xs>
                                <Paper className={classes.paper}>{this.state.data.Nombre}</Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8}>
                            <Grid item xs={1}>Domicilio: </Grid>
                            <Grid item xs>
                                <Paper className={classes.paper}>
                                    {this.state.data.calle + ' ' + this.state.data.numero + ', ' + this.state.data.ciudad + ' ' + this.state.data.barrio}
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8}>
                            <Grid item xs={1}>Referencia: </Grid>
                            <Grid item xs>
                                <Paper className={classes.paper}>
                                    {this.state.data.referencia}
                                </Paper>
                            </Grid>
                        </Grid>
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleChangeTab}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Contactos" />
                            <Tab label="Usuarios" />
                            <Tab label="Zonificacion" />
                            <Tab label="Notas"/>
                            <Tab label="Oportunidades"/>
                        </Tabs>
                        <SwipeableViews
                            axis='x'
                            index={this.state.tabValue}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContactos  data={this.state.dataContactos}/>
                            <TabUsuarios data={this.state.dataUsuarios}/>
                            <TabZonas data={this.state.dataZonas}/>
                            <TabNotas data={this.state.dataNotas}/>
                            <TabOpor data={this.state.dataOpor}/>
                        </SwipeableViews>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(ClientData);