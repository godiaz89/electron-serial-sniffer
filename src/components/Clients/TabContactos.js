import React from 'react';
import DataTable from 'react-data-table-component';




export default class TabContactos extends React.Component {


    columns = [
        {
            name: 'Nombre',
            selector: 'NOMBRE_MIX',
            sortable: true,
            grow: 2
        },
        {
            name: 'Telefono',
            selector: 'TELEFONO',
            sortable: true,
            grow: 1
        },
        {
            name: 'Observaciones',
            selector: 'DATOS01',
            sortable: true,
            grow: 2,
        }
    ];



    // componentWillMount() {
    //     console.log('Por Montar TabContactos: ', this.props.data);
    // }

    // componentDidMount() {
    //     console.log('Montado TabContactos: ', this.props.data);
    // }


    render = () => {
        return (
            <DataTable
                title='Contactos'
                keyField="id"
                columns={this.columns}
                data={this.props.data}
                highlightOnHover
            />
        );
    }

}