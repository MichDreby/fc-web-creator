import { FC, useCallback } from 'react'
import { random } from 'lodash'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { News } from '@interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Clickable } from '../Clickable'

import styles from './styles.module.css'

const getRandomImageUrl = (index: number) =>
  `https://picsum.photos/id/${index}/1000/300`

interface NewsListItemProps {
  item: News
}

export const NewsListItem: FC<NewsListItemProps> = ({
  item,
  item: { id, title, description, created_at },
}) => {
  const navigate = useNavigate()

  const handleDelete = useCallback(() => {
    console.log('******\n', 'delete')
  }, [])

  const handleNavigate = useCallback(() => {
    navigate(`/news/${id}`, {
      state: {
        item,
      },
    })
  }, [id, item, navigate])

  return (
    <Clickable
      key={id}
      onClick={handleNavigate}
    >
      <div className={styles.container}>
        <div
          className={styles.containerCurtain}
          style={{
            backgroundImage: `url(${getRandomImageUrl(
              random(1, 1000, false),
            )})`,
          }}
        />
        <div className={styles.itemContent}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.description}>{description}</h3>
          <h3 className={styles.created_at}>
            {moment(created_at).format('L')}
          </h3>
          <Clickable
            onClick={handleDelete}
            stopPropagation
          >
            <FontAwesomeIcon
              icon={'trash-can'}
              className={styles.deleteButton}
            />
          </Clickable>
        </div>
      </div>
    </Clickable>
  )
}
