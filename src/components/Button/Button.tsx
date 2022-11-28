import React, { useCallback, useState } from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

interface IProps {
  label: string
  onClick: () => void
  containerStyle?: string
}

export const Button: React.FC<IProps> = React.memo(
  ({ onClick, label, containerStyle }) => {
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = useCallback(() => {
      setIsActive((state) => !state)
    }, [])

    return (
      <button
        className={classNames(
          styles.container,
          containerStyle ?? null,
          isActive && styles.activeContainer,
        )}
        onClick={onClick}
        onMouseDown={toggleIsActive}
        onMouseUp={toggleIsActive}
      >
        <p className={styles.label}>{label}</p>
      </button>
    )
  },
)
