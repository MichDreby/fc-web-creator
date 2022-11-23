import React from 'react'
import { Field } from 'formik'
import classNames from 'classnames'

import { CLUB_INFO_FORM_FIELDS } from '@constants'

import styles from './styles.module.css'

interface IProps {
  fieldId: CLUB_INFO_FORM_FIELDS
  label: string
  containerStyle?: string
  placeholder?: string
  description?: string
}

export const Input: React.FC<IProps> = React.memo(
  ({ fieldId, label, containerStyle, placeholder = '', description = '' }) => {
    // const { values } = useFormikContext<ClubInfoFormValues>()

    return (
      <div className={classNames(styles.container, containerStyle ?? null)}>
        <label htmlFor={fieldId} className={styles.label}>
          {label}
        </label>
        <Field
          id={fieldId}
          name={fieldId}
          placeholder={placeholder}
          className={styles.input}
        />
        {Boolean(description) && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    )
  },
)
