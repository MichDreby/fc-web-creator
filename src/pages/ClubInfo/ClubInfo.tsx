import React, { useCallback, useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import classNames from 'classnames'
import { isArray } from 'lodash'

import { CLUB_INFO_FORM_FIELDS } from '@constants'
import { Button, ColorPickerInput, Input, Previewer } from '@components'
import { ClubInfoFormValues } from '@types'
import { retrieveTeam, updateTeam, uploadEmblem } from '@api'
import { Team } from '@interfaces'

import styles from './styles.module.css'

export const ClubInfo: React.FC = React.memo(() => {
  const [info, setInfo] = useState<null | Team>(null)

  useEffect(() => {
    const handler = async () => {
      try {
        const { data } = await retrieveTeam()

        setInfo(data)
      } catch (error) {
        console.log('******\n', 'error', error)
      }
    }
    handler()
  }, [])

  const { name, founded, club_colors, venue, website, emblemUrl } = (info ||
    {}) as Team

  const handleUploadEmblem = useCallback(async (file: File) => {
    try {
      uploadEmblem(file)
    } catch (error) {
      console.log('******\n', 'error upload', error)
    }
  }, [])

  return (
    <div className={styles.container}>
      {Boolean(info) && (
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <Formik
              initialValues={{
                [CLUB_INFO_FORM_FIELDS.NAME]: name,
                [CLUB_INFO_FORM_FIELDS.VENUE]: venue,
                [CLUB_INFO_FORM_FIELDS.FOUNDED]: founded,
                [CLUB_INFO_FORM_FIELDS.CLUB_COLORS]: club_colors,
                [CLUB_INFO_FORM_FIELDS.WEBSITE]: website,
              }}
              onSubmit={async (values: ClubInfoFormValues) => {
                try {
                  const nextInfo = {
                    ...values,
                    founded: Number(values.founded),
                    club_colors: isArray(values.club_colors)
                      ? values.club_colors
                      : [values.club_colors],
                  }

                  await updateTeam(nextInfo)
                } catch (error) {
                  console.log('******\n', 'onSubmit, error', error)
                }
              }}
            >
              {({ handleSubmit }) => (
                <Form className={styles.formContainer}>
                  <div className={styles.formColumn}>
                    <Input
                      fieldId={CLUB_INFO_FORM_FIELDS.NAME}
                      label={'Name'}
                      placeholder={'Club name'}
                      containerStyle={styles.inputContainer}
                      description={'Some description for this field'}
                    />

                    <Input
                      fieldId={CLUB_INFO_FORM_FIELDS.VENUE}
                      label={'Venue'}
                      placeholder={'Venue'}
                      containerStyle={styles.inputContainer}
                      description={'Some description for this field'}
                    />
                    <Input
                      fieldId={CLUB_INFO_FORM_FIELDS.WEBSITE}
                      label={'Website'}
                      placeholder={'Website'}
                      description={'Some description for this field'}
                    />
                  </div>

                  <div
                    className={classNames(
                      styles.formColumn,
                      styles.formColumnLast,
                    )}
                  >
                    <Input
                      fieldId={CLUB_INFO_FORM_FIELDS.FOUNDED}
                      label={'Founded'}
                      placeholder={'Founded'}
                      containerStyle={styles.inputContainer}
                      description={'Some description for this field'}
                    />
                    <div>
                      <ColorPickerInput
                        fieldId={CLUB_INFO_FORM_FIELDS.CLUB_COLORS}
                        initialColor={club_colors[0]}
                        label={'Colors'}
                        placeholder={'Colors'}
                        containerStyle={styles.inputContainer}
                        description={'Some description for this field'}
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleSubmit}
                    label={'save'}
                    containerStyle={styles.submitBtnContainer}
                  />
                </Form>
              )}
            </Formik>
          </div>
          <div className={styles.rightContainer}>
            <Previewer
              onUpload={handleUploadEmblem}
              url={emblemUrl}
            />
          </div>
        </div>
      )}
    </div>
  )
})
