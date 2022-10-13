import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

interface IProps {
  label: string
  onClick: () => void
  containerStyle?: string
}

export const Button: React.FC<IProps> = React.memo(
  ({ onClick, label, containerStyle }) => {
    return (
      <button
        className={classNames(styles.container, containerStyle ?? null)}
        onClick={onClick}
      >
        <p className={styles.label}>{label}</p>
      </button>
    )
  },
)
