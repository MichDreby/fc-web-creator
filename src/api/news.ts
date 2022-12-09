import { News } from '@interfaces'
import { Network } from '@services'

const baseUrl =
  'https://9w38a02270.execute-api.eu-west-1.amazonaws.com/dev/news'

export const createNews = (data: Omit<News, 'id' | 'created_at'>) =>
  Network.post<News>(`${baseUrl}`, data)

export const listAllNews = () => Network.get<News[]>(`${baseUrl}`)

export const retrieveNews = (id: string) =>
  Network.get<News>(`${baseUrl}/${id}`)

export const updateNews = (id: string, data: Partial<News>) =>
  Network.patch<Partial<News>>(`${baseUrl}/${id}`, data)

export const deleteNews = (id: string) => Network.delete<''>(`${baseUrl}/${id}`)
