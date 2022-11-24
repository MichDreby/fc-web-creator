import React, { useEffect } from 'react'
import { Field, useFormikContext } from 'formik'
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
  ({
    fieldId,
    label,
    containerStyle,
    placeholder = '',
    description = '',
    foo,
  }) => {
    const formikContext = useFormikContext()

    useEffect(() => {
      if (foo) {
        const { values, setFieldValue } = formikContext

        console.log('******\n', 'values', values)

        setTimeout(() => {
          console.log('******\n', 'trigger')
          setFieldValue(CLUB_INFO_FORM_FIELDS.CLUB_COLORS, 'michdreby1')
        }, 3000)
      }
    }, [foo, formikContext])

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
