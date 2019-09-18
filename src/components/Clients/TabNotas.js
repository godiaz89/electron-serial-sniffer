import React from 'react';
import DataTable from 'react-data-table-component';





export default function TabZonas(props) {
    //console.log(props);
    const columns = [
        {
            name: 'Usuario',
            selector: 'NOMBRE',
            sortable: true,
            grow: 1
        },
        {
            name: 'Datos',
            selector: 'OBS',
            sortable: true,
            grow: 4
        },
        {
            name: 'Fecha',
            selector: 'FECHAHORA',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Desde',
            selector: 'DATEINI',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Hasta',
            selector: 'DATEFIN',
            sortable: true,
            grow: 1,
        },
    ];
    const RedTheme={
        rows:{
            backgroundColor:'#F44336'
        }
    }

    return (
        <DataTable
            title='Notas'
            //keyField="id"
            columns={columns}
            data={props.data}
            className={RedTheme}
            highlightOnHover
        />
    );
}