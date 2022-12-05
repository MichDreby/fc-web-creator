import classNames from 'classnames'
import { FC, useState, useCallback } from 'react'

import styles from '../styles.module.css'
import { CellProps } from '../types'

export type OnChangeCallback = (event: {
  target: {
    value: string
  }
}) => void

export const TextCell: FC<CellProps<string>> = ({
  getValue,
  isRowEditable,
  row: { index: rowIndex },
  column: { id: columnId },
  table: {
    options: {
      meta: { updateCellData },
    },
  },
}) => {
  const [value, setValue] = useState<string>(() => getValue())

  const handleOnChange = useCallback<OnChangeCallback>(
    ({ target: { value } }) => {
      setValue(value)
      updateCellData(rowIndex, columnId, value)
    },
    [columnId, rowIndex, updateCellData],
  )

  return isRowEditable ? (
    <input
      value={value}
      onChange={handleOnChange}
      className={classNames(styles.cellInput)}
    />
  ) : (
    <div>{value}</div>
  )
}
