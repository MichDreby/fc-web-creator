import { memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { listAllNews } from '@api'
import { Button, NewsList } from '@components'
import { News as INews } from '@interfaces'

import styles from './styles.module.css'

export const News = memo(() => {
  const navigate = useNavigate()
  const [data, setData] = useState<null | INews[]>(null)

  useEffect(() => {
    const handler = async () => {
      const { data } = await listAllNews()

      setData(data)
    }

    handler()
  }, [])

  const handleCreateNews = useCallback(() => {
    navigate(`/news/${'create'}`, {
      state: {},
    })
  }, [navigate])

  return (
    <div className={styles.container}>
      <Button
        label={'+ Add news'}
        onClick={handleCreateNews}
        containerStyle={styles.buttonContainer}
      />
      {data && <NewsList data={data} />}
    </div>
  )
})
