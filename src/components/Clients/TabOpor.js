import React from 'react';
import DataTable from 'react-data-table-component';





export default function TabOpor(props) {
    //console.log(props);
    const columns = [
        {
            name: 'Oportunidad N°',
            selector: 'NUMERO',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Fecha',
            selector: 'FECHA',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Etapa',
            selector: 'ETAPA',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Estado',
            selector: 'ESTADO',
            sortable: true,
            grow: 1,
        },
        {
            name: 'Obs',
            selector: 'OBS',
            sortable: true,
            grow: 4,
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