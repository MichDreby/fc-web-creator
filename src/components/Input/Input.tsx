import React from 'react'
import { Field } from 'formik'
import classNames from 'classnames'

import styles from './styles.module.css'

interface IProps {
  fieldId: string
  label: string
  containerStyle?: string
  placeholder?: string
}

export const Input: React.FC<IProps> = React.memo(
  ({ fieldId, label, containerStyle, placeholder = '' }) => {
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
      </div>
    )
  },
)
