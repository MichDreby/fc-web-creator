import { FC, useCallback } from 'react'
import { map, random } from 'lodash'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { News } from '@interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Clickable } from '../Clickable'

import styles from './styles.module.css'

interface NewsListProps {
  data: News[]
}

const getRandomImageUrl = (index: number) =>
  `https://picsum.photos/id/${index}/1000/300`

export const NewsList: FC<NewsListProps> = ({ data }) => {
  const handleDelete = useCallback(() => {
    console.log('******\n', 'delete')
  }, [])

  return (
    <div className={styles.container}>
      {map(data, ({ id, title, description, created_at }, index) => {
        return (
          <Link
            key={id}
            to={`/news/${id}`}
          >
            <div className={styles.itemContainer}>
              <div
                className={styles.itemContainerCurtain}
                style={{
                  backgroundImage: `url(${getRandomImageUrl(
                    index * random(1, 100, false),
                  )})`,
                }}
              />
              <div className={styles.itemContent}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.description}>{description}</h3>
                <h3 className={styles.created_at}>
                  {moment(created_at).format('L')}
                </h3>
                <Clickable onClick={handleDelete}>
                  <FontAwesomeIcon
                    icon={'trash-can'}
                    className={styles.deleteButton}
                  />
                </Clickable>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
