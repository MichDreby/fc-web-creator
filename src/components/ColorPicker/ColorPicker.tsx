import React, { useCallback, useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import { noop } from 'lodash'

import styles from './styles.module.css'

export interface ColorPickerProps {
  initialColor?: string
  onChange: (color: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = React.memo(
  ({ initialColor = '#000', onChange = noop }) => {
    const [isPickerActive, setIsPickerActive] = useState(false)
    const [color, setColor] = useState(initialColor)

    const handleChangeColor = useCallback(
      ({ hex }: ColorResult) => {
        setColor(hex)
        onChange(hex)
      },
      [onChange],
    )

    const handlePickerClick = useCallback(() => {
      setIsPickerActive((prevState) => !prevState)
    }, [])

    return (
      <div className={styles.container}>
        <div
          className={styles.circle}
          style={{
            backgroundColor: color,
          }}
          onClick={handlePickerClick}
        />
        {isPickerActive && (
          <ChromePicker color={color} onChangeComplete={handleChangeColor} />
        )}
      </div>
    )
  },
)
