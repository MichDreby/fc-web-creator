import hoistNonReactStatics from 'hoist-non-react-statics'
import { FC } from 'react'

import { CellContext, ColumnDefTemplate } from '@tanstack/react-table'

import { CellProps, Player, RawCellProps } from './types'

export const withIsRowEditable = (WrappedComponent: FC<CellProps<any>>) => {
  const Enhanced: FC<RawCellProps<any>> = (props) => {
    const {
      row: { id: rowId },
      table: {
        options: {
          meta: { editableRowId },
        },
      },
    } = props
    const isRowEditable = rowId === editableRowId

    return <WrappedComponent {...props} isRowEditable={isRowEditable} />
  }
  hoistNonReactStatics(Enhanced, WrappedComponent)

  return Enhanced as ColumnDefTemplate<CellContext<Player, any>>
}
