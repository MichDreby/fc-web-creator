import { BASE_URL } from '@constants'
import { Network } from '@services'

const assetsUrl = `${BASE_URL}/assets`
const emblemUrl = `${assetsUrl}/emblem`

export const uploadEmblem = (data: File) =>
  Network.post(`${emblemUrl}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const retrieveEmblemUrl = () => Network.get<string>(`${emblemUrl}`)
