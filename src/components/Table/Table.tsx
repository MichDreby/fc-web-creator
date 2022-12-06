import { FC, useCallback, useState } from 'react'
import moment from 'moment'
import { map } from 'lodash'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Player } from '@interfaces'

import { Button } from '../Button'

import styles from './styles.module.css'
import { withIsRowEditable } from './withIsRowEditable'
import { TextCell, PositionCell, DateCell, ActionCell } from './cells'
import { withIsNumeric } from './withIsNumeric'

const columnHelper = createColumnHelper<Player>()

const columns = [
  columnHelper.accessor('first_name', {
    header: 'First Name',
    cell: withIsRowEditable(TextCell),
  }),
  columnHelper.accessor('last_name', {
    header: 'Last Name',
    cell: withIsRowEditable(TextCell),
  }),
  columnHelper.accessor('position', {
    header: 'Position',
    cell: withIsRowEditable(PositionCell),
  }),
  columnHelper.accessor('nationality', {
    header: 'Nationality',
    cell: withIsRowEditable(TextCell),
  }),
  columnHelper.accessor('shirt_name', {
    header: 'Shirt Name',
    cell: withIsRowEditable(TextCell),
  }),
  columnHelper.accessor('shirt_number', {
    header: 'Shirt Number',
    cell: withIsRowEditable(withIsNumeric(TextCell)),
  }),
  columnHelper.accessor('birthday', {
    header: 'Birthday',
    cell: withIsRowEditable(DateCell),
  }),
  columnHelper.accessor('contract_start', {
    header: 'Contract Start',
    cell: withIsRowEditable(DateCell),
  }),
  columnHelper.accessor('contract_end', {
    header: 'Contract End',
    cell: withIsRowEditable(DateCell),
  }),
  columnHelper.display({
    id: 'action_column',
    cell: withIsRowEditable(ActionCell),
  }),
]

interface TableProps {
  data: Player[]
}

export const Table: FC<TableProps> = ({ data }) => {
  const [tableData, setTableData] = useState(data)
  const [editableRowId, setEditableRowId] = useState<null | string>(null)

  const updateCellData = useCallback(
    (rowIndex: number, columnId: string, nextValue: any) => {
      setTableData((prevState) =>
        map(prevState, (rowData, index) =>
          index === rowIndex
            ? {
                ...prevState[rowIndex]!,
                [columnId]: nextValue,
              }
            : rowData,
        ),
      )
    },
    [],
  )

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      tableData,
      setTableData,
      updateCellData,
      editableRowId,
      setEditableRowId,
    },
  })

  const handleAddRow = useCallback(() => {
    setTableData([
      ...tableData,
      {
        first_name: 'First Name',
        last_name: 'LastName',
        shirt_name: 'ShirtName',
        position: 'Striker',
        birthday: moment('2000').format(),
        nationality: 'Belarus',
        shirt_number: 99,
        contract_start: moment('2022').format(),
        contract_end: moment('2024').format(),
      },
    ])
  }, [tableData])

  return (
    <div className={styles.container}>
      <div className={styles.buttonsRowContainer}>
        <Button label={'+ Add player'} onClick={handleAddRow} />
      </div>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.headerRow}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.headerCell}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.bodyRow}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.bodyCell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
