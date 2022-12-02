import classNames from 'classnames'
import { pullAt } from 'lodash'
import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Clickable } from '../../Clickable'
import { CellProps } from '../types'
import styles from '../styles.module.css'

export const ActionCell: FC<CellProps<null>> = ({
  row: { id: rowId, index: rowIndex },
  table: {
    options: {
      meta: { tableData, setTableData, setEditableRowId },
    },
  },
  isRowEditable,
}) => {
  const handleDeleteRow = () => {
    const nextTableData = [...tableData]
    pullAt(nextTableData, rowIndex)

    setTableData(nextTableData)
  }

  const handleEditRow = () => {
    setEditableRowId(rowId)
  }

  const handleEditRowComplete = () => {
    setEditableRowId(null)
  }

  return (
    <div className={styles.rowActionButtonsContainer}>
      {isRowEditable ? (
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
        <FontAwesomeIcon icon={'trash-can'} className={styles.actionIcon} />
      </Clickable>
    </div>
  )
}
