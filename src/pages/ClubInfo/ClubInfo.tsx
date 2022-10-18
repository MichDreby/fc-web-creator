import React from 'react'
import { Formik, Form } from 'formik'

import { CLUB_INFO_FORM_FIELDS } from '@constants'
import { Button, Input } from '@components'
import { ball } from '@assets'
import { ClubInfoFormValues } from '@types'

import styles from './styles.module.css'

export const ClubInfo: React.FC = React.memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img src={ball} className={styles.appLogo} alt="logo" />

        <h1>Football Club information</h1>

        <div className={styles.formContainer}>
          <Formik
            initialValues={{
              [CLUB_INFO_FORM_FIELDS.NAME]: '',
              [CLUB_INFO_FORM_FIELDS.VENUE]: '',
              [CLUB_INFO_FORM_FIELDS.FOUNDED]: '',
              [CLUB_INFO_FORM_FIELDS.CLUB_COLORS]: '',
              [CLUB_INFO_FORM_FIELDS.WEBSITE]: '',
            }}
            onSubmit={(values: ClubInfoFormValues) => {
              console.log('******\n', 'values', values)
            }}
          >
            <Form>
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.NAME}
                label={'Name'}
                placeholder={'Name'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.FOUNDED}
                label={'Founded'}
                placeholder={'Founded'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.VENUE}
                label={'Venue'}
                placeholder={'Venue'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.CLUB_COLORS}
                label={'Colors'}
                placeholder={'Colors'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.WEBSITE}
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
