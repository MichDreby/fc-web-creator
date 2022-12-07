import hoistNonReactStatics from 'hoist-non-react-statics'
import { FC } from 'react'

import { CellProps, WithIsNumeric } from './types'

export const withIsNumeric = (
  WrappedComponent: FC<CellProps<any> & Partial<WithIsNumeric>>,
  isNumeric = true,
) => {
  const Enhanced: FC<CellProps<any>> = (props) => {
    return (
      <WrappedComponent
        {...props}
        isNumeric={isNumeric}
      />
    )
  }
  hoistNonReactStatics(Enhanced, WrappedComponent)

  return Enhanced
}
