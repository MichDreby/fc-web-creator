import { Network } from '@services'

const { REACT_APP_API_URL } = process.env
const assetsUrl = `${REACT_APP_API_URL}/assets`
const emblemUrl = `${assetsUrl}/emblem`

export const uploadEmblem = (file: File) => {
  console.log('******\n', 'file ', file)

  const formData = new FormData()
  formData.append('file', file)

  return Network.post(`${emblemUrl}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const retrieveEmblemUrl = () => Network.get<string>(`${emblemUrl}`)
