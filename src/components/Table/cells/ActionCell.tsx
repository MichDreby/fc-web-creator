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
  isRowEditable,
  table: {
    options: {
      meta: { tableData, setTableData, setEditableRowIndex, updateCellData },
    },
  },
}) => {
  const handleDeleteRow = useCallback(() => {
    const { id } = original

    const nextTableData = [...tableData]
    pullAt(nextTableData, rowIndex)

    setTableData(nextTableData)

    if (id) {
      deletePlayer(id)
    }
  }, [original, rowIndex, setTableData, tableData])

  const handleEditRow = useCallback(() => {
    setEditableRowIndex(rowIndex)
  }, [rowIndex, setEditableRowIndex])

  const handleEditRowComplete = useCallback(async () => {
    const { id, ...playerData } = original

    console.log('******\n', 'playerData', playerData)

    if (id) {
      updatePlayer(id as string, playerData)
    } else {
      try {
        const {
          data: { id },
        } = await createPlayer(playerData)
        updateCellData(rowIndex, 'id', id)
      } catch (error) {
        console.log('handleEditRowComplete', error)
      }
    }

    setEditableRowIndex(null)
  }, [original, rowIndex, setEditableRowIndex, updateCellData])

  return (
    <div className={styles.rowActionButtonsContainer}>
      {isRowEditable ? (
        <Clickable onClick={handleEditRowComplete}>
          <FontAwesomeIcon
            icon={'check'}
            className={classNames(styles.editCompleteIcon, styles.leftIcon)}
          />
        </Clickable>
      ) : (
        <Clickable onClick={handleEditRow}>
          <FontAwesomeIcon
            icon={'pencil'}
            className={classNames(styles.actionIcon, styles.leftIcon)}
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
}
