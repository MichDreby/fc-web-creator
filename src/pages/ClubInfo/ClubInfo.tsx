import React from 'react'
import { Formik, Form } from 'formik'

import { Button, Input } from '@components'

import styles from './styles.module.css'

enum FORM_VALUES {
  NAME = 'NAME',
  VENUE = 'VENUE',
  FOUNDED = 'FOUNDED',
  CLUB_COLORS = 'CLUB_COLORS',
  WEBSITE = 'WEBSITE',
}

interface IFormValues {
  [FORM_VALUES.NAME]: string
  [FORM_VALUES.VENUE]: string
  [FORM_VALUES.CLUB_COLORS]: string[]
  [FORM_VALUES.FOUNDED]: number | null
  [FORM_VALUES.WEBSITE]: string
}

export const ClubInfo: React.FC = React.memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Football Club information</h1>

        <div className={styles.formContainer}>
          <Formik
            initialValues={{
              [FORM_VALUES.NAME]: '',
              [FORM_VALUES.VENUE]: '',
              [FORM_VALUES.FOUNDED]: null,
              [FORM_VALUES.CLUB_COLORS]: [''],
              [FORM_VALUES.WEBSITE]: '',
            }}
            onSubmit={(
              values: IFormValues,
              // { setSubmitting }: FormikHelpers<IFormValues>,
            ) => {
              console.log('******\n', 'values', values)
            }}
          >
            <Form>
              <Input
                fieldId={FORM_VALUES.NAME}
                label={'Name'}
                placeholder={'Name'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={FORM_VALUES.FOUNDED}
                label={'Founded'}
                placeholder={'Founded'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={FORM_VALUES.VENUE}
                label={'Venue'}
                placeholder={'Venue'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={FORM_VALUES.CLUB_COLORS}
                label={'Colors'}
                placeholder={'Colors'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={FORM_VALUES.WEBSITE}
                label={'Website'}
                placeholder={'Website'}
              />
              <Button
                onClick={() => {}}
                label={'Submit'}
                containerStyle={styles.buttonContainer}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
})
