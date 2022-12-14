import { FC } from 'react'
import { map } from 'lodash'

import { News } from '@interfaces'

import { NewsListItem } from '../NewsListItem'

import styles from './styles.module.css'

interface NewsListProps {
  data: News[]
  deleteNewsItem: (deletedId: string) => void
}

export const NewsList: FC<NewsListProps> = ({ data, deleteNewsItem }) => {
  return (
    <div className={styles.container}>
      {map(data, (item, index) => (
        <NewsListItem
          key={item?.id}
          item={item}
          index={index}
          deleteNewsItem={deleteNewsItem}
        />
      ))}
    </div>
  )
}
