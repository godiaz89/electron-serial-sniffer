import React from 'react';
import DataTable from 'react-data-table-component';




export default class ZADListDT extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    columns = [
        {
            name: 'Cliente',
            selector: 'ABONADO',
            sortable: true,
            grow: 1
        },
        {
            name: 'Nombre',
            selector: 'NOMBRE',
            sortable: true,
            grow: 2
        },
        {
            name: 'Detalle',
            selector: 'DETALLE',
            sortable: true,
            grow: 3,
        },
        {
            name: 'Zona',
            selector: 'ZONA',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Fecha y Hora',
            selector: 'fechahora',
            sortable: true,
            grow: 1,
        }
    ];



    // componentWillMount() {
    //     console.log('Por Montar ZADListDT: ', this.props.data);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({data:nextProps.data});   
    // }


    render = () => {
        return (
            <DataTable
                title='Zonas Anuladas diarias'
                keyField="id"
                columns={this.columns}
                data={this.props.data}
                highlightOnHover
            />
        );
    }

}