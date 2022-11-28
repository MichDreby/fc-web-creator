import React from 'react'
import { Formik, Form } from 'formik'
import classNames from 'classnames'

import { CLUB_INFO_FORM_FIELDS } from '@constants'
import { ColorPickerInput, Input, Previewer } from '@components'
import { ClubInfoFormValues } from '@types'

import styles from './styles.module.css'

export const ClubInfo: React.FC = React.memo(() => (
  <div className={styles.container}>
    <div className={styles.contentContainer}>
      <div className={styles.leftContainer}>
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
          <Form className={styles.formContainer}>
            <div className={styles.formColumn}>
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.NAME}
                label={'Name'}
                placeholder={'FC Barcelona'}
                containerStyle={styles.inputContainer}
                description={'Some description for this field'}
              />

              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.VENUE}
                label={'Venue'}
                placeholder={'Camp Nou'}
                containerStyle={styles.inputContainer}
                description={'Some description for this field'}
              />
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.WEBSITE}
                label={'Website'}
                placeholder={'https://www.fcbarcelona.com/'}
                description={'Some description for this field'}
              />
            </div>

            <div
              className={classNames(styles.formColumn, styles.formColumnLast)}
            >
              <Input
                fieldId={CLUB_INFO_FORM_FIELDS.FOUNDED}
                label={'Founded'}
                placeholder={'1898'}
                containerStyle={styles.inputContainer}
                description={'Some description for this field'}
              />
              <div>
                <ColorPickerInput
                  fieldId={CLUB_INFO_FORM_FIELDS.CLUB_COLORS}
                  label={'Colors'}
                  placeholder={'Colors'}
                  containerStyle={styles.inputContainer}
                  description={'Some description for this field'}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className={styles.rightContainer}>
        <Previewer />
      </div>
    </div>
  </div>
))
