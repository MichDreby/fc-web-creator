import { useState } from 'react'
import moment from 'moment'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { defaultData, Player } from './data'
import styles from './styles.module.css'

const columnHelper = createColumnHelper<Player>()

const columns = [
  columnHelper.accessor('first_name', {
    header: 'First Name',
  }),
  columnHelper.accessor('last_name', {
    header: 'Last Name',
  }),
  columnHelper.accessor('shirt_name', {
    header: 'Shirt Name',
  }),
  columnHelper.accessor('position', {
    header: 'Position',
  }),
  columnHelper.accessor('birthday', {
    header: 'Birthday',
    cell: (info) => moment(info.getValue()).format('LL'),
  }),
  columnHelper.accessor('nationality', {
    header: 'Nationality',
  }),
  columnHelper.accessor('shirt_number', {
    header: 'Shirt Number',
  }),
  columnHelper.accessor('contract_start', {
    header: 'Contract Start',
    cell: (info) => moment(info.getValue()).format('LL'),
  }),
  columnHelper.accessor('contract_end', {
    header: 'Contract End',
    cell: (info) => moment(info.getValue()).format('LL'),
  }),
]

export const Table = () => {
  const [data] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={styles.container}>
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
