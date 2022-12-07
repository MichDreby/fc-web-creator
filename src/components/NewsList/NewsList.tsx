import { FC } from 'react'
import { map, random } from 'lodash'
import moment from 'moment'

import { News } from '@interfaces'

import styles from './styles.module.css'

interface NewsListProps {
  data: News[]
}

const getRandomImageUrl = (index: number) =>
  `https://picsum.photos/id/${index}/1000/300`

export const NewsList: FC<NewsListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {map(data, ({ id, title, description, created_at }, index) => {
        return (
          <div
            key={id}
            className={styles.itemContainer}
          >
            <div
              key={id}
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
            </div>
          </div>
        )
      })}
    </div>
  )
}
