import React, { FC, ReactElement } from 'react'

import styles from './styles.module.css'

interface ClickableProps {
  children: ReactElement | ReactElement[]
  onClick: () => any
  stopPropagation?: boolean
}

export const Clickable: FC<ClickableProps> = React.memo(
  ({ children, onClick, stopPropagation = false }) => (
    <div
      className={styles.container}
      onClick={(event) => {
        if (stopPropagation) {
          event.stopPropagation()
        }

        onClick()
      }}
    >
      {children}
    </div>
  ),
)
