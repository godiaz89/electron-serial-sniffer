import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '@material-ui/icons/DateRange';
import { connect } from 'react-redux';
import { NOTES, } from '../../socket/events'
import {
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
  EditingState,
  DataTypeProvider,
  GroupingState,
  IntegratedGrouping,
  SortingState,
  IntegratedSorting,
  SearchState,
  RowDetailState
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableGroupRow,
  TableEditRow,
  TableEditColumn,
  TableInlineCellEditing,
  TableColumnVisibility,
  PagingPanel,
  GroupingPanel,
  DragDropProvider,
  Toolbar,
  SearchPanel,
  ColumnChooser,
  TableRowDetail,
  TableColumnResizing,
} from "@devexpress/dx-react-grid-material-ui";
import { requestEvent } from '../../../redux/actions';
import {
  DateTypeProvider, BooleanTypeProvider,
  SelectTypeProviderOperadores, SelectTypeProviderTipos,
  NoteTooltip, NoteRowDetail, ResizingPanel, DateFilterCell
} from '../GridFormatters'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCalendarWeek, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    padding: 8
  },
  table: {
    minWidth: 300,
  },
  title: {
    display: 'flex',
    alignItems: 'baseline'
  }
}));

const Cell = (props) => {
  return <Table.Cell {...props} />;
};

// const FocusableCell = ({ onClick, ...restProps }) => (
//   <Table.Cell {...restProps} tabIndex={0} onFocus={onClick} />
// );


function Notes({ notes, requestEvent }) {

  const classes = useStyles();
  const [columns, setcolumns] = useState([
    { name: '_id', title: 'id' },
    { name: 'operador', title: 'Operador' },
    { name: 'tipo', title: 'Tipo' },
    { name: 'abonado', title: 'Abonado' },
    { name: 'note', title: 'Novedad' },
    { name: 'fecha', title: 'Fecha' },
    { name: 'vigente', title: 'Vigente' }
  ]);
  const [columnWidths, setColumnWidths] = useState([
    { columnName: 'operador', width: 100 },
    { columnName: 'abonado', width: 100 },
    { columnName: 'fecha', width: 150 },
    { columnName: 'vigente', width: 80 },
  ]);
  const [dateColumns] = useState(['fecha']);
  const [booleanColumns] = useState(['vigente']);
  const [selectableColumns] = useState(['operador']);
  const [tableColumnExtensions] = useState([
    // { columnName: 'note', width: '30%' },
    { columnName: 'abonado', width: '20%' },
    { columnName: 'tipo', width: '10%' },
    { columnName: 'operador', width: '25%' },
  ]);
  const [editingStateColumnExtensions] = useState([
    { columnName: 'fecha', editingEnabled: false },
  ]);

  const [defaultHiddenColumnNames] = useState(['_id']);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 10, 15, 50, 100]);
  const [rows, setRows] = useState([]);
  const [showCommandColumn, setShowCommandColumn] = useState(true)


  useEffect(() => {
    setRows(notes)
  }, [notes])

  const getRowId = row => row._id;


  const parseChangedRows = changed => {
    let id = Object.keys(changed)[0];
    console.log(id);
    let condition = { _id: id };
    let value = Object.values(changed)[0];
    console.log(condition, value)
    return { condition, value }
  }

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      console.log('ADDED ROWS:', added)
      requestEvent({ event: NOTES, subtype: 'add', params: added[0] })
      changedRows = [
        ...rows,
        ...added,
      ];
    }
    if (changed) {
      console.log('CHANGD ROWS, ', changed)
      let params = parseChangedRows(changed)
      console.log(params)
      requestEvent({ event: NOTES, subtype: 'update', params });
      changedRows = rows.map(row => (changed[row._id] ? { ...row, ...changed[row._id] } : row));
      console.log(changedRows);
    }
    setRows(changedRows);
  }

  return (

    <Grid rows={rows} columns={columns} getRowId={getRowId} >
      <DateTypeProvider for={dateColumns} />
      <DragDropProvider />
      <BooleanTypeProvider
        for={booleanColumns}
      />
      <SelectTypeProviderOperadores for={selectableColumns} />
      <SelectTypeProviderTipos for={['tipo']} />
      <NoteTooltip for={['note']} />
      <DataTypeProvider
        for={dateColumns}
        availableFilterOperations={dateFilterOperations}
      />
      <SortingState
        defaultSorting={[
          { columnName: 'fecha', direction: 'desc' },
        ]}
      />
      <GroupingState />
      <IntegratedSorting />
      <IntegratedGrouping />
      <FilteringState defaultFilters={[]} />
      <EditingState
        onCommitChanges={commitChanges}
        columnExtensions={editingStateColumnExtensions}
      />
      <SearchState />
      <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
      <PagingState
        // defaultCurrentPage={0}
        // pageSize={5}
        currentPage={currentPage}
        onCurrentPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
      <RowDetailState />
      <IntegratedPaging />
      <Table
        // rowComponent={clientRow}
        columnExtensions={tableColumnExtensions}
        cellComponent={Cell}
      />

      <TableHeaderRow showSortingControls />
      <TableGroupRow />
      <TableColumnVisibility
        defaultHiddenColumnNames={defaultHiddenColumnNames}
      />

      <Toolbar />
      <ResizingPanel
        showCommandColumn={() => setShowCommandColumn(!showCommandColumn)}
        classes
      />
      <SearchPanel />
      <ColumnChooser />
      <GroupingPanel showSortingControls />
      {showCommandColumn&&<TableFilterRow
        showFilterSelector
        iconComponent={FilterIcon}
        // cellComponent={DateFilterCell}
        messages={{ month: 'Mes igual', day: 'Dia igual', year: 'Año igual' }}
      />}

      <TableEditRow />
      {/* <TableInlineCellEditing selectTextOnEditStart startEditAction='doubleClick'/> */}

      {/* <TableColumnResizing defaultColumnWidths={columnWidths} onColumnWidthsChange={setColumnWidths} resizingMode={'widget'} /> */}
      {showCommandColumn && <TableEditColumn
        showAddCommand
        showEditCommand
      />}
      {/* <TableRowDetail
          contentComponent={NoteRowDetail}
        /> */}

      <PagingPanel pageSizes={pageSizes} />
    </Grid>
  )
}

export default connect(({news}) => { return { notes: news.notes } }, { requestEvent })(Notes);