import React from 'react';
import DataTable from 'react-data-table-component';

export default function TabZonas(props) {

    const columns = [
        {
          name: 'N°',
          selector:'N_ZONA',
          sortable: true,
          grow: 2
        },
        {
          name: 'Descripcion',
          selector: 'NOMBRE',
          sortable: true,
          grow: 1
        },
        {
          name: 'Tipo',
          selector:'LISTA',
          sortable: true,
          grow: 2,
        },
        {
            name: 'Sensor',
            selector:'SENSOR',
            sortable: true,
            grow: 2,
          },
          {
            name: 'Cant',
            selector:'SENSOR_CNT',
            sortable: true,
            grow: 2,
          },
          {
            name: 'Observaciones',
            selector:'DATOS01',
            sortable: true,
            grow: 2,
          },
      ];

    return (
        <DataTable
          title='Zonas'
          //keyField="id"
          columns={columns}
          data={props.data}
          highlightOnHover
        />
    );
}