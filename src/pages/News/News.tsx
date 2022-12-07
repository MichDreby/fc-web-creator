import { memo, useEffect, useState } from 'react'

import { listAllPlayers } from '@api'
import { Table } from '@components'
import { Player } from '@interfaces'

import styles from './styles.module.css'

export const News = memo(() => {
  const [data, setData] = useState<null | Player[]>(null)

  useEffect(() => {
    const handler = async () => {
      const { data } = await listAllPlayers()

      setData(data)
    }

    handler()
  }, [])

  return <div className={styles.container}>{data && <Table data={data} />}</div>
})
