import classNames from 'classnames'
import { pullAt } from 'lodash'
import { FC, useCallback } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPlayer, deletePlayer, updatePlayer } from '@api'

import { Clickable } from '../../Clickable'
import { CellProps } from '../types'

import styles from './ActionCell.styles.module.css'

export const ActionCell: FC<CellProps<null>> = ({
  row: { index: rowIndex, original },
  table: {
    options: {
      meta: { tableData, setTableData, setEditableRowIndex },
    },
  },
  isRowEditable,
}) => {
  const handleDeleteRow = () => {
    const { id } = original

    const nextTableData = [...tableData]
    pullAt(nextTableData, rowIndex)

    setTableData(nextTableData)

    if (id) {
      deletePlayer(id)
    }
  }

  const handleEditRow = () => {
    setEditableRowIndex(rowIndex)
  }

  const handleEditRowComplete = useCallback(() => {
    const { id, ...playerData } = original

    console.log('******\n', 'playerData', playerData)

    if (id) {
      updatePlayer(id as string, playerData)
    } else {
      createPlayer(playerData)
    }

    setEditableRowIndex(null)
  }, [original, setEditableRowIndex])

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
