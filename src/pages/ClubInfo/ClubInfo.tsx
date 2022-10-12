import React from 'react'
import { Formik, Field, Form } from 'formik'

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
          <div>
            <label htmlFor={FORM_VALUES.NAME}>Name</label>
            <Field
              id={FORM_VALUES.NAME}
              name={FORM_VALUES.NAME}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor={FORM_VALUES.VENUE}>Venue</label>
            <Field
              id={FORM_VALUES.VENUE}
              name={FORM_VALUES.VENUE}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor={FORM_VALUES.FOUNDED}>Founded</label>
            <Field
              id={FORM_VALUES.FOUNDED}
              name={FORM_VALUES.FOUNDED}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor={FORM_VALUES.CLUB_COLORS}>Club colors</label>
            <Field
              id={FORM_VALUES.CLUB_COLORS}
              name={FORM_VALUES.CLUB_COLORS}
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor={FORM_VALUES.WEBSITE}>Website</label>
            <Field
              id={FORM_VALUES.WEBSITE}
              name={FORM_VALUES.WEBSITE}
              placeholder=""
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
})
