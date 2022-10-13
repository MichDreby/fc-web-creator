import React from 'react'
import { Formik, Form } from 'formik'

import { CLUB_INFO_FORM_VALUES, IClubInfoFormValues } from '@constants'
import { Button, Input } from '@components'

import styles from './styles.module.css'

export const ClubInfo: React.FC = React.memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Football Club information</h1>

        <div className={styles.formContainer}>
          <Formik
            initialValues={{
              [CLUB_INFO_FORM_VALUES.NAME]: '',
              [CLUB_INFO_FORM_VALUES.VENUE]: '',
              [CLUB_INFO_FORM_VALUES.FOUNDED]: '',
              [CLUB_INFO_FORM_VALUES.CLUB_COLORS]: '',
              [CLUB_INFO_FORM_VALUES.WEBSITE]: '',
            }}
            onSubmit={(values: IClubInfoFormValues) => {
              console.log('******\n', 'values', values)
            }}
          >
            <Form>
              <Input
                fieldId={CLUB_INFO_FORM_VALUES.NAME}
                label={'Name'}
                placeholder={'Name'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_VALUES.FOUNDED}
                label={'Founded'}
                placeholder={'Founded'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_VALUES.VENUE}
                label={'Venue'}
                placeholder={'Venue'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_VALUES.CLUB_COLORS}
                label={'Colors'}
                placeholder={'Colors'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_VALUES.WEBSITE}
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
