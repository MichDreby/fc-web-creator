import { FC } from 'react'

import { CellProps } from '../types'

export const PositionCell: FC<CellProps<string>> = ({ isRowEditable }) => {
  return (
    <div
      style={{
        backgroundColor: isRowEditable ? 'red' : 'white',
      }}
    >
      PositionCell
    </div>
  )
}
