import hoistNonReactStatics from 'hoist-non-react-statics'
import { FC } from 'react'

import { CellContext, ColumnDefTemplate } from '@tanstack/react-table'
import { Player } from '@interfaces'

import { CellProps, RawCellProps } from './types'

export const withIsRowEditable = (WrappedComponent: FC<CellProps<any>>) => {
  const Enhanced: FC<RawCellProps<any>> = (props) => {
    const {
      row: { index: rowIndex },
      table: {
        options: {
          meta: { editableRowIndex },
        },
      },
    } = props
    const isRowEditable = rowIndex === editableRowIndex

    return <WrappedComponent {...props} isRowEditable={isRowEditable} />
  }
  hoistNonReactStatics(Enhanced, WrappedComponent)

  return Enhanced as ColumnDefTemplate<CellContext<Player, any>>
}
