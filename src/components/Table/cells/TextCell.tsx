import classNames from 'classnames'
import { FC, useState, useCallback } from 'react'

import { CellProps } from '../types'

import styles from './TextCell.styles.module.css'

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
  const [value, setValue] = useState<string>(() => String(getValue()))

  const handleOnChange = useCallback<OnChangeCallback>(
    ({ target: { value } }) => {
      setValue(value)
      updateCellData(rowIndex, columnId, value)
    },
    [columnId, rowIndex, updateCellData],
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
