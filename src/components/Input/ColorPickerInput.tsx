import React, { useCallback } from 'react'
import { useFormikContext } from 'formik'

import { CLUB_INFO_FORM_FIELDS } from '@constants'

import { ColorPicker } from '../ColorPicker'

import styles from './ColorPickerInput.styles.module.css'
import { Input, InputProps } from './Input'

export const ColorPickerInput: React.FC<
  InputProps & {
    initialColor: string
  }
> = React.memo(({ fieldId, label, initialColor }) => {
  const { setFieldValue } = useFormikContext()

  const handleChangeColor = useCallback(
    (color: string) => {
      setFieldValue(CLUB_INFO_FORM_FIELDS.CLUB_COLORS, color)
    },
    [setFieldValue],
  )

  return (
    <div className={styles.container}>
      <Input
        fieldId={fieldId}
        label={label}
        inputStyle={styles.input}
        inputProps={{
          disabled: true,
        }}
      />
      <div className={styles.pickerContainer}>
        <ColorPicker
          onChange={handleChangeColor}
          initialColor={initialColor}
        />
      </div>
    </div>
  )
})
