import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import moment from 'moment'

import { News } from '@interfaces'
import { OnChangeCallback } from '@types'
import { Button } from '@components'
import { updateNews, retrieveNews, createNews } from '@api'

import styles from './styles.module.css'

type NewsDetailsProps = News

export const NewsDetails: FC<Partial<NewsDetailsProps>> = memo(() => {
  const {
    state: { id = null, created_at = null },
  } = useLocation()

  const [isLoaded, setIsLoaded] = useState(false)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  useEffect(() => {
    const handler = async () => {
      try {
        if (id) {
          const {
            data: { title, description },
          } = await retrieveNews(id)

          setTitleValue(title)
          setDescriptionValue(description)
        } else {
          setTitleValue('Enter news title')
          setDescriptionValue('Write some description')
        }
        setIsLoaded(true)
      } catch (error) {
        console.log('******\n', 'NewsDetails - error', error)
      }
    }

    handler()
  }, [id])

  const handleTitleChange = useCallback<OnChangeCallback>(
    ({ target: { value } }) => {
      setTitleValue(value)
    },
    [],
  )

  const handleDescriptionChange = useCallback<OnChangeCallback>(
    ({ target: { value } }) => {
      setDescriptionValue(value)
    },
    [],
  )

  const handleSave = useCallback(() => {
    if (id) {
      updateNews(id, {
        title: titleValue,
        description: descriptionValue,
      })
    } else {
      createNews({
        title: titleValue,
        description: descriptionValue,
      })
    }
  }, [descriptionValue, id, titleValue])

  return (
    <div className={styles.container}>
      {isLoaded && (
        <>
          <textarea
            value={titleValue}
            className={classNames(styles.title, styles.input)}
            onChange={handleTitleChange}
          />
          {created_at && (
            <p className={styles.date}>
              {`written on ${moment(created_at).format('LL')}`}
            </p>
          )}
          <textarea
            value={descriptionValue}
            className={classNames(styles.description, styles.input)}
            onChange={handleDescriptionChange}
          />
          <Button
            containerStyle={styles.saveButton}
            onClick={handleSave}
            label={'save'}
          />
        </>
      )}
    </div>
  )
})
