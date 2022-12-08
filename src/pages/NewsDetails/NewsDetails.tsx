import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { News } from '@interfaces'

import styles from './styles.module.css'

type NewsDetailsProps = News

export const NewsDetails: FC<Partial<NewsDetailsProps>> = memo(() => {
  const { state } = useLocation()
  console.log('******\n', 'state', state)

  return <div className={styles.container}>{'NewsDetails'}</div>
})
