import React from 'react'
import { Field, GenericFieldHTMLAttributes } from 'formik'
import classNames from 'classnames'

import { CLUB_INFO_FORM_FIELDS } from '@constants'

import styles from './Input.styles.module.css'

export interface InputProps {
  fieldId: CLUB_INFO_FORM_FIELDS
  label: string
  containerStyle?: string
  inputStyle?: string
  placeholder?: string
  description?: string
  inputProps?: GenericFieldHTMLAttributes
}

export const Input: React.FC<InputProps> = React.memo(
  ({
    fieldId,
    label,
    containerStyle,
    inputStyle,
    placeholder = '',
    description = '',
    inputProps,
  }) => (
    <div className={classNames(styles.container, containerStyle ?? null)}>
      <label
        htmlFor={fieldId}
        className={styles.label}
      >
        {label}
      </label>
      <Field
        id={fieldId}
        name={fieldId}
        placeholder={placeholder}
        className={classNames(styles.input, inputStyle ?? null)}
        {...inputProps}
      />
      {Boolean(description) && (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  ),
)
