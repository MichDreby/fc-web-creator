import { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { pullAt } from 'lodash'

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../Button'

import { defaultData, Player } from './dataMocks'
import styles from './styles.module.css'

const columnHelper = createColumnHelper<Player>()

const defaultColumn: Partial<ColumnDef<Player>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue()
    const [value, setValue] = useState(initialValue)
    const onBlur = () => {
      table.options.meta?.updateData(index, id, value)
    }

    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <input
        className={styles.cellInput}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    )
  },
}

export const Table = () => {
  const [tableData, setTableData] = useState(defaultData)
  const columns = useMemo(
    () => [
      columnHelper.accessor('first_name', {
        header: 'First Name',
      }),
      columnHelper.accessor('last_name', {
        header: 'Last Name',
      }),
      columnHelper.accessor('position', {
        header: 'Position',
      }),
      columnHelper.accessor('nationality', {
        header: 'Nationality',
      }),
      columnHelper.accessor('shirt_name', {
        header: 'Shirt Name',
      }),
      columnHelper.accessor('shirt_number', {
        header: 'Shirt Number',
      }),
      columnHelper.accessor('birthday', {
        header: 'Birthday',
        cell: (info) => moment(info.getValue() || undefined).format('L'),
      }),
      columnHelper.accessor('contract_start', {
        header: 'Contract Start',
        cell: (info) => moment(info.getValue() || undefined).format('L'),
      }),
      columnHelper.accessor('contract_end', {
        header: 'Contract End',
        cell: (info) => moment(info.getValue() || undefined).format('L'),
      }),
      columnHelper.display({
        id: 'delete_column',
        cell: (tableProps) => (
          <div
            style={{
              cursor: 'pointer',
              color: 'blue',
              textDecoration: 'underline',
            }}
            onClick={() => {
              const nextTableData = [...tableData]
              pullAt(nextTableData, tableProps.row.index)

              setTableData(nextTableData)
            }}
          >
            <FontAwesomeIcon icon={'trash-can'} className={styles.deleteIcon} />
          </div>
        ),
      }),
    ],
    [tableData],
  )

  const table = useReactTable({
    data: tableData,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
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
        shirt_number: '99',
        contract_start: '',
        contract_end: '',
      },
    ])
  }, [tableData])

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
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Button onClick={handleAddRow} label={'new'} />
      </div>
    </div>
  )
}
