import { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'
import { pullAt } from 'lodash'
import classNames from 'classnames'

import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../Button'
import { Clickable } from '../Clickable'

import { defaultData, Player } from './dataMocks'
import styles from './styles.module.css'

const columnHelper = createColumnHelper<Player>()

const defaultColumn: Partial<ColumnDef<Player>> = {
  cell: ({
    getValue,
    row: { id: rowId },
    table: {
      options: {
        meta: { editableRowId },
      },
    },
  }) => {
    const initialValue = getValue()
    const [currentValue, setCurrentValue] = useState<string>(initialValue)

    useEffect(() => {
      setCurrentValue(initialValue)
    }, [initialValue])

    const isEditable = rowId === editableRowId

    return isEditable ? (
      <input
        className={classNames(styles.cellInput)}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
    ) : (
      <div>{currentValue}</div>
    )
  },
}

export const Table = () => {
  const [tableData, setTableData] = useState(defaultData)
  const [editableRowId, setEditableRowId] = useState<null | string>(null)

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
        cell: ({
          row,
          table: {
            options: {
              meta: { editableRowId },
            },
          },
        }) => {
          const { id, index } = row

          const handleDeleteRow = () => {
            const nextTableData = [...tableData]
            pullAt(nextTableData, index)
            console.log('******\n', 'nextTableData', nextTableData)

            setTableData(nextTableData)
          }

          const handleEditRow = () => {
            setEditableRowId(id)
          }

          const handleEditRowComplete = () => {
            setEditableRowId(null)
          }

          const isEditable = id === editableRowId

          return (
            <div className={styles.rowActionButtonsContainer}>
              {isEditable ? (
                <Clickable onClick={handleEditRowComplete}>
                  <FontAwesomeIcon
                    icon={'check'}
                    className={classNames(styles.editCompleteIcon)}
                  />
                </Clickable>
              ) : (
                <Clickable onClick={handleEditRow}>
                  <FontAwesomeIcon
                    icon={'pencil'}
                    className={classNames(styles.actionIcon)}
                  />
                </Clickable>
              )}

              <Clickable onClick={handleDeleteRow}>
                <FontAwesomeIcon
                  icon={'trash-can'}
                  className={styles.actionIcon}
                />
              </Clickable>
            </div>
          )
        },
      }),
    ],
    [tableData],
  )

  const table = useReactTable({
    data: tableData,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    meta: {
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
        shirt_number: '99',
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
