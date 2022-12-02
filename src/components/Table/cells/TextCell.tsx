import classNames from 'classnames'
import { FC, useState, useEffect } from 'react'

import styles from '../styles.module.css'
import { CellProps } from '../types'

export const TextCell: FC<CellProps<string>> = ({
  getValue,
  isRowEditable,
}) => {
  const initialValue = getValue()
  const [currentValue, setCurrentValue] = useState<string>(initialValue)
  useEffect(() => {
    setCurrentValue(initialValue)
  }, [initialValue])

  return isRowEditable ? (
    <input
      className={classNames(styles.cellInput)}
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
    />
  ) : (
    <div>{currentValue}</div>
  )
}
