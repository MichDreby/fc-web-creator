import moment from 'moment'
import { FC, useCallback } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { CellProps } from '../types'

import './ReactDatePicker.styles.css'
import styles from './DateCell.styles.module.css'

export const DateCell: FC<CellProps<string>> = ({
  isRowEditable,
  getValue,
  row: { index: rowIndex },
  column: { id: columnId },
  table: {
    options: {
      meta: { updateCellData },
    },
  },
}) => {
  const handleOnChange = useCallback(
    (value: Date) => {
      updateCellData(rowIndex, columnId, value)
    },
    [columnId, rowIndex, updateCellData],
  )

  return (
    <div
      style={{
        width: 100,
      }}
    >
      {isRowEditable ? (
        <DatePicker
          disabled={!isRowEditable}
          selected={new Date(getValue())}
          onChange={handleOnChange}
        />
      ) : (
        <input
          className={styles.input}
          value={moment(getValue()).format('L')}
        />
      )}
    </div>
  )
}
