import React, { FC, ReactElement } from 'react'

interface ClickableProps {
  children: ReactElement | ReactElement[]
  onClick: () => any
}

export const Clickable: FC<ClickableProps> = React.memo(
  ({ children, onClick }) => (
    <div
      style={{
        cursor: 'pointer',
        padding: 6,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  ),
)
