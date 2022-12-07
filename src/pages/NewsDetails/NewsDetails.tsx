import { FC, memo } from 'react'

import { News } from '@interfaces'

import styles from './styles.module.css'

type NewsDetailsProps = News

export const NewsDetails: FC<Partial<NewsDetailsProps>> = memo((props) => {
  console.log('******\n', 'props', props)

  return <div className={styles.container}>{'NewsDetails'}</div>
})
