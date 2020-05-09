import React, { PureComponent } from 'react'
import moment from 'moment';
import { Typography, Paper, Chip, Select, MenuItem, Input, IconButton, Dialog, DialogContent, Tooltip, Button, TableCell } from '@material-ui/core';
import { DatePicker } from "@material-ui/pickers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {
    DataTypeProvider,
} from "@devexpress/dx-react-grid";
import {
    Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
    TableGroupRow,
    TableEditRow,
    TableEditColumn,
    TableColumnVisibility,
    PagingPanel,
    GroupingPanel,
    DragDropProvider,
    Toolbar,
    SearchPanel,
    ColumnChooser
} from "@devexpress/dx-react-grid-material-ui";
import {
    Plugin,
    Template,
    TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { connect } from 'react-redux';



const DateFormatter = ({ value }) =>moment(value).format('DD-MM-YY');



const TooltipDateFormatter = ({ row, value }) => (
    <Tooltip title={(
        <span>
            {`${moment(value).format('DD-MM-YYYY hh:mm:ss')}`}
        </span>
    )}
    >
        <span>
            {moment(value).format('DD-MM-YYYY')}
        </span>
    </Tooltip>
);

export const DateTypeProvider = props => (
    <DataTypeProvider formatterComponent={TooltipDateFormatter} {...props} />
)


const BooleanFormatter = ({ value }) => <Chip label={value ? 'Si' : 'No'} />;

const BooleanEditor = ({ value, onValueChange }) => (
    <Select
        input={<Input />}
        value={value ? 'Si' : 'No'}
        onChange={event => onValueChange(event.target.value === 'Si')}
        style={{ width: '100%' }}
    >
        <MenuItem value="Si">
            Si
        </MenuItem>
        <MenuItem value="No">
            No
        </MenuItem>
    </Select>
);

export const BooleanTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={BooleanFormatter}
        editorComponent={BooleanEditor}
        {...props}
    />
);




const SelectFormatter = ({ value }) => <Chip label={value} />;



const SelectEditorTipos = ({ value, onValueChange, }) => (
    <Select
        value={value || ''}
        onChange={event => onValueChange(event.target.value)}
        style={{ width: '100%' }}
    >
        <MenuItem value='tecnico'>
            Tecnico
        </MenuItem>
        <MenuItem value='ctrlactv'>
            Control de activacion
        </MenuItem>
        <MenuItem value='varios'>
            Varios
        </MenuItem>
    </Select>
);



export const SelectTypeProviderTipos = props => {
    return (<DataTypeProvider
        editorComponent={SelectEditorTipos}
        {...props}
    />)

}




const SelectEditorOperadores = ({ value, onValueChange, noteUsers }) => (
    <Select
        value={value || ''}
        onChange={event => onValueChange(event.target.value)}
        style={{ width: '100%' }}
    >
        {
            noteUsers && noteUsers.sort((a, b) => a.nombre > b.nombre ? 1 : -1).map((u, i) => (
                <MenuItem key={i} value={u.nombre}>
                    {u.nombre}
                </MenuItem>
            ))
        }
    </Select>
);



export const SelectTypeProviderOperadores = props => {
    return (<DataTypeProvider
        editorComponent={connect(({news}) => { return { noteUsers: news.noteUsers } }, null)(SelectEditorOperadores)}
        {...props}
    />)

}

const TooltipNoteFormatter = ({ row, value }) => (
    <Tooltip title={(
        <span>
            {`${row?.note}`}
        </span>
    )}
    >
        <span>
            {value}
        </span>
    </Tooltip>
);

export const NoteTooltip = props => (
    <DataTypeProvider
        formatterComponent={TooltipNoteFormatter}
        {...props}
    />
);


export const NoteRowDetail = ({ row }) => (
    <div>
        {row?.note}
    </div>
);


export const ResizingPanel = props => {

    const { showCommandColumn, classes } = props;
    return (
        <Plugin name="ResizingPanel">
            <Template name="toolbarContent">
                <Tooltip title='habilitar/Deshabilitar comandos'>
                <IconButton
                    onClick={showCommandColumn}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </IconButton>
                </Tooltip>
            <TemplatePlaceholder />
            </Template>
        </Plugin >
    )

}


const UnitsFilterCell = ({ filter, onFilter }) => (
    <TableCell>
        <DatePicker
            inputVariant="outlined"
            label='Fecha'
            helperText="Fecha"
            value={filter}
            onChange={(e) => onFilter(e)}
        />
    </TableCell>
);

export const DateFilterCell = (props) => {
    const { column } = props;
    if (column.name === 'fecha') {
        return <UnitsFilterCell {...props} />;
    }
    return <TableFilterRow.Cell {...props} />;
};