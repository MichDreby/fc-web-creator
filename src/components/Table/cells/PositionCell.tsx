import { FC, useCallback } from 'react'
import Dropdown, { Option } from 'react-dropdown'
import classNames from 'classnames'
import 'react-dropdown/style.css'

import { PlayerPosition } from '@interfaces'

import { CellProps } from '../types'

import styles from './PositionCell.styles.module.css'

const options = [
  {
    value: 'goalkeeper',
    label: 'goalkeeper',
  },
  {
    value: 'defender',
    label: 'defender',
  },
  {
    value: 'midfielder',
    label: 'midfielder',
  },
  {
    value: 'striker',
    label: 'striker',
  },
  {
    value: 'manager',
    label: 'manager',
  },
  {
    value: 'coach',
    label: 'coach',
  },
  {
    value: 'stuff',
    label: 'stuff',
  },
]

const getOptionByValue = (value: PlayerPosition) => ({
  value,
  label: value,
})

export const PositionCell: FC<CellProps<PlayerPosition>> = ({
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
  const handleOnChange = useCallback(
    (option: Option) => {
      updateCellData(rowIndex, columnId, option?.value)
    },
    [columnId, rowIndex, updateCellData],
  )

  return (
    <div className={styles.container}>
      <Dropdown
        className={styles.dropdown}
        controlClassName={classNames(!isRowEditable && styles.dropdownDisabled)}
        disabled={!isRowEditable}
        options={options}
        onChange={handleOnChange}
        value={getOptionByValue(getValue())}
        placeholder="Select an option"
      />
    </div>
  )
}
