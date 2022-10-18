import React from 'react'
import { Formik, Form } from 'formik'

import { CLUB_INFO_FORM, IClubInfoForm } from '@constants'
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
              [CLUB_INFO_FORM.NAME]: '',
              [CLUB_INFO_FORM.VENUE]: '',
              [CLUB_INFO_FORM.FOUNDED]: '',
              [CLUB_INFO_FORM.CLUB_COLORS]: '',
              [CLUB_INFO_FORM.WEBSITE]: '',
            }}
            onSubmit={(values: IClubInfoForm) => {
              console.log('******\n', 'values', values)
            }}
          >
            <Form>
              <Input
                fieldId={CLUB_INFO_FORM.NAME}
                label={'Name'}
                placeholder={'Name'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM.FOUNDED}
                label={'Founded'}
                placeholder={'Founded'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM.VENUE}
                label={'Venue'}
                placeholder={'Venue'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM.CLUB_COLORS}
                label={'Colors'}
                placeholder={'Colors'}
                containerStyle={styles.inputContainer}
              />
              <Input
                fieldId={CLUB_INFO_FORM.WEBSITE}
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
