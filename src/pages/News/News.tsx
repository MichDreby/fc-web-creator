import { memo, useEffect, useState } from 'react'

import { listAllNews } from '@api'
import { NewsList } from '@components'
import { News as INews } from '@interfaces'

import styles from './styles.module.css'

export const News = memo(() => {
  const [data, setData] = useState<null | INews[]>(null)

  useEffect(() => {
    const handler = async () => {
      const { data } = await listAllNews()

      setData(data)
    }

    handler()
  }, [])

  return (
    <div className={styles.container}>{data && <NewsList data={data} />}</div>
  )
})
