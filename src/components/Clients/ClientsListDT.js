import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icon from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';
import TextField from '@material-ui/core/TextField';
import ClientData from './ClientData';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};



class ClientsListDT extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{
      datashowned: [],
      dataSelected:[],
      idselected:'',
      openData:false
    }]
  }

  columns = [
    {
      name: 'Cliente',
      cell: row => <div>{row.objetivo == 'FIJO' ?
        <FontAwesomeIcon icon={Icon.faHome} size='lg'></FontAwesomeIcon>
        :
        <FontAwesomeIcon icon={Icon.faCar} size='lg'></FontAwesomeIcon>} &nbsp; {row.cliente} </div>,
      sortable: true,
      grow: 0.5,
      button: true
    },
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
      grow: 1,
      button: true
    },
    {
      name: 'Domicilio',
      cell: row => <div>{row.ciudad + row.barrio + row.calle + row.numero}</div>,
      sortable: true,
      grow: 3,
      button: true
    }
  ];


  componentDidMount = () => {
    this.setState({
      datashowned: this.props.data
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      datashowned: nextProps.data
    })
  }


  handleChange = (e) => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.data;
      newList = currentList.filter(item => {
        var clienteFilt, nombreFilt, ciudadFilt, barrioFilt;
        item.cliente !== null && item.cliente !== undefined ? clienteFilt = item.cliente.toLowerCase() : clienteFilt = '';
        item.nombre !== null && item.nombre !== undefined ? nombreFilt = item.nombre.toLowerCase() : nombreFilt = '';
        item.ciudad !== null && item.ciudad !== undefined ? ciudadFilt = item.ciudad.toLowerCase() : ciudadFilt = '';
        item.barrio !== null && item.barrio !== undefined ? barrioFilt = item.barrio.toLowerCase() : barrioFilt = '';
        const filter = e.target.value.toLowerCase();
        if (clienteFilt.includes(filter) || nombreFilt.includes(filter) ||
          ciudadFilt.includes(filter) || barrioFilt.includes(filter)) return item;
      });
    } else {
      newList = this.props.data;
    }
    this.setState({
      datashowned: newList
    });
  }

  handleClose = () => {
    this.setState({
      openData: false
    });
  };

  // consumirDataCliente = (rows) => {
  //   this.setState({
  //     dataSelected:rows,
  //     openData:true
  //   });
  // }

  handleRowClick=(row)=>{
    this.setState({id:row.id,openData:true,cardcode:row.cliente});
    // socketcli.traeDatosCliente(row.id);
    // socketcli.consumeDatosCliente(this.consumirDataCliente);
  }

  render() {
    const { classes } = this.props;
    // console.log('Log render ClientsListDT: ',this.props.data);

    return (
      <Paper className={classes.root}>
        <DataTable
          title={<TextField id="search" name="search" placeholder="buscar" label="Clientes" onChange={this.handleChange} />}
          keyField="id"
          columns={this.columns}
          data={this.state.datashowned}
          highlightOnHover
          pagination
          onRowClicked={this.handleRowClick}
        />
        <ClientData id={this.state.id} cardcode={this.state.cardcode} open={this.state.openData} onClose={this.handleClose}/>
      </Paper>

    );
  }

}

ClientsListDT.propTypes = {
  classes: PropTypes.object.isRequired,
};

ClientsListDT.defaultProps = {
  data: [{ id: '0', test: 1 }, { id: '1', test: 2 }]
};

export default withStyles(styles)(ClientsListDT);
