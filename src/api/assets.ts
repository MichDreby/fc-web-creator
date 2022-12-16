import { Network } from '@services'

const baseUrl =
  'https://6m8scp0my4.execute-api.eu-west-1.amazonaws.com/dev/assets'

export const uploadEmblem = (data: File) =>
  Network.post(`${baseUrl}/emblem`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const retrieveEmblemUrl = () => Network.get<string>(`${baseUrl}/emblem`)
