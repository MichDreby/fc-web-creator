import classNames from 'classnames'
import { FC, useState, useCallback } from 'react'

import { CellProps, WithIsNumeric } from '../types'

import styles from './TextCell.styles.module.css'

export type OnChangeCallback = (event: {
  target: {
    value: string
  }
}) => void

export const TextCell: FC<CellProps<string> & Partial<WithIsNumeric>> = ({
  getValue,
  isRowEditable,
  row: { index: rowIndex },
  column: { id: columnId },
  table: {
    options: {
      meta: { updateCellData },
    },
  },
  isNumeric,
}) => {
  const [value, setValue] = useState<string>(() => getValue())

  const handleOnChange = useCallback<OnChangeCallback>(
    ({ target: { value } }) => {
      setValue(value)
      updateCellData(rowIndex, columnId, isNumeric ? Number(value) : value)
    },
    [columnId, isNumeric, rowIndex, updateCellData],
  )

  return (
    <input
      value={value}
      onChange={handleOnChange}
      className={classNames(
        isRowEditable ? styles.inputEditable : styles.inputNotEditable,
      )}
      disabled={!isRowEditable}
    />
  )
}
