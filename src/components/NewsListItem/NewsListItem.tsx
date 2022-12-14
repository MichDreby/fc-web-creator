import { FC, useCallback } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { News } from '@interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteNews } from '@api'

import { Clickable } from '../Clickable'

import styles from './styles.module.css'

const getRandomImageUrl = (index: number) =>
  `https://picsum.photos/id/${index}/1000/300`

//picsum.photos/id/237/200/300

https: interface NewsListItemProps {
  item: News
  index: number
  deleteNewsItem: (deletedId: string) => void
}

export const NewsListItem: FC<NewsListItemProps> = ({
  item: { id, title, description, created_at },
  index,
  deleteNewsItem,
}) => {
  const navigate = useNavigate()

  const handleDelete = useCallback(async () => {
    try {
      await deleteNews(id)
      deleteNewsItem(id)
    } catch (error) {
      console.log('******\n', 'handleDelete, error', error)
    }
  }, [deleteNewsItem, id])

  const handleNavigate = useCallback(() => {
    navigate(`/news/${id}`, {
      state: {
        id,
        created_at,
      },
    })
  }, [created_at, id, navigate])

  return (
    <Clickable
      key={id}
      onClick={handleNavigate}
    >
      <div className={styles.container}>
        <div
          className={styles.containerCurtain}
          style={{
            backgroundImage: `url(${getRandomImageUrl(index + 20)})`,
          }}
        />
        <div className={styles.itemContent}>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.description}>{description}</h3>
          <h3 className={styles.date}>{moment(created_at).format('L')}</h3>
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
