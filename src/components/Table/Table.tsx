import { useCallback, useState } from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Button } from '../Button'

import { defaultData } from './mocks'
import styles from './styles.module.css'
import { withIsRowEditable } from './withIsRowEditable'
import { Player } from './types'
import { TextCell, PositionCell, DateCell, ActionCell } from './cells'

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
    cell: withIsRowEditable(TextCell),
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

export const Table = () => {
  const [tableData, setTableData] = useState(defaultData)
  const [editableRowId, setEditableRowId] = useState<null | string>(null)

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      tableData,
      setTableData,
      editableRowId,
      setEditableRowId,
    },
  })

  const handleAddRow = useCallback(() => {
    setTableData([
      ...tableData,
      {
        first_name: 'First name',
        last_name: 'Last name',
        shirt_name: 'Shirt name',
        position: 'Striker',
        birthday: '',
        nationality: 'Belarus',
        shirt_number: 99,
        contract_start: '',
        contract_end: '',
      },
    ])
  }, [tableData])

  return (
    <div className={styles.container}>
      <div className={styles.buttonsRowContainer}>
        <Button label={'add player'} onClick={handleAddRow} />
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
