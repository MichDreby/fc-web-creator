import { FC, useCallback } from 'react'
import { map, random } from 'lodash'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleNavigateCreator = useCallback(
    (id: string) => () => {
      navigate(`/news/${id}`)
    },
    [navigate],
  )

  return (
    <div className={styles.container}>
      {map(data, ({ id, title, description, created_at }, index) => {
        return (
          <Clickable
            key={id}
            onClick={handleNavigateCreator(id as string)}
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
      })}
    </div>
  )
}
