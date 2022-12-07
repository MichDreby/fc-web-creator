import { FC } from 'react'

import { News } from '@interfaces'

interface NewsListProps {
  data: News[]
}

export const NewsList: FC<NewsListProps> = ({ data }) => {
  console.log('******\n', 'data', data)

  return <div>NewsList</div>
}
