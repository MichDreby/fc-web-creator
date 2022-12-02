import { FC } from 'react'

import { CellProps } from '../types'

export const DateCell: FC<CellProps<string>> = ({ isRowEditable }) => {
  return (
    <div
      style={{
        backgroundColor: isRowEditable ? 'red' : 'white',
      }}
    >
      DateCell
    </div>
  )
}
