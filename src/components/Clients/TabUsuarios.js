import React from 'react';
import DataTable from 'react-data-table-component';




export default function TabUsuarios(props) {

    const columns = [
        {
          name: 'Codigo',
          selector:'COD_US',
          sortable: true,
          grow: 0.5
        },
        {
          name: 'Nombre',
          selector: 'NOMBRE_MIX',
          sortable: true,
          grow: 1
        },
        {
          name: 'UserID',
          selector:'USER_ID',
          sortable: true,
          grow: 1,
        },
        {
            name: 'Clave',
            selector:'CLAVE',
            sortable: true,
            grow: 1,
          },
          {
            name: 'ContraClave',
            selector:'CONTRACLAVE',
            sortable: true,
            grow: 1,
          },
          {
            name: 'Observaciones',
            selector:'DATOS01',
            sortable: true,
            grow: 1,
          }
      ];

    return (
        <DataTable
          title='Usuarios'
          //keyField="id"
          columns={columns}
          data={props.data}
          highlightOnHover
        />
    );
}