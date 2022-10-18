import React from 'react'
import { Field, useFormikContext } from 'formik'
import classNames from 'classnames'

import { CLUB_INFO_FORM_FIELDS } from '@constants'
import { ClubInfoFormValues } from '@types'

import styles from './styles.module.css'

interface IProps {
  fieldId: CLUB_INFO_FORM_FIELDS
  label: string
  containerStyle?: string
  placeholder?: string
}

export const Input: React.FC<IProps> = React.memo(
  ({ fieldId, label, containerStyle, placeholder = '' }) => {
    const { values } = useFormikContext<ClubInfoFormValues>()

    return (
      <div className={classNames(styles.container, containerStyle ?? null)}>
        {Boolean(values?.[fieldId]) && (
          <label htmlFor={fieldId} className={styles.label}>
            {label}
          </label>
        )}
        <Field
          id={fieldId}
          name={fieldId}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    )
  },
)
