import { FC } from 'react'
import { map } from 'lodash'

import { News } from '@interfaces'

import { NewsListItem } from '../NewsListItem'

import styles from './styles.module.css'

interface NewsListProps {
  data: News[]
}

export const NewsList: FC<NewsListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {map(data, (item) => (
        <NewsListItem
          key={item?.id}
          item={item}
        />
      ))}
    </div>
  )
}
