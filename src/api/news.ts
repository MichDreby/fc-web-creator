import { News } from '@interfaces'
import { Network } from '@services'

const { REACT_APP_API_URL } = process.env
const newsUrl = `${REACT_APP_API_URL}/news`

export const createNews = (data: Omit<News, 'id' | 'created_at'>) =>
  Network.post<News>(newsUrl, data)

export const listAllNews = () => Network.get<News[]>(newsUrl)

export const retrieveNews = (id: string) =>
  Network.get<News>(`${newsUrl}/${id}`)

export const updateNews = (id: string, data: Partial<News>) =>
  Network.patch<Partial<News>>(`${newsUrl}/${id}`, data)

export const deleteNews = (id: string) => Network.delete<''>(`${newsUrl}/${id}`)
