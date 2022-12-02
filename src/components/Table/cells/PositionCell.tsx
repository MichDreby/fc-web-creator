import { FC, useState } from 'react'
import Dropdown, { Option } from 'react-dropdown'
import classNames from 'classnames'

import { CellProps } from '../types'

import 'react-dropdown/style.css'
import styles from './PositionCell.styles.module.css'

export type PlayerPosition =
  | 'goalkeeper'
  | 'defender'
  | 'midfielder'
  | 'striker'
  | 'manager'
  | 'coach'
  | 'stuff'

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

export const PositionCell: FC<CellProps<string>> = ({ isRowEditable }) => {
  const [value, setValue] = useState<Option>(options[1])
  const handleOnChange = (option: Option) => {
    setValue(option)
  }

  return (
    <div className={styles.container}>
      <Dropdown
        className={styles.dropdown}
        controlClassName={classNames(!isRowEditable && styles.dropdownDisabled)}
        disabled={!isRowEditable}
        options={options}
        onChange={handleOnChange}
        value={value}
        placeholder="Select an option"
      />
    </div>
  )
}
