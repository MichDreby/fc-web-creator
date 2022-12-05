import { Player } from '@interfaces'
import { Network } from '@services'

const baseUrl =
  'https://94ehb96449.execute-api.eu-west-1.amazonaws.com/dev/players'

export const createPlayer = (data: Player) =>
  Network.post<Player>(`${baseUrl}`, data)

export const listAllPlayers = () => Network.get<Player[]>(`${baseUrl}`)

export const retrievePlayer = (id: string) =>
  Network.get<Player>(`${baseUrl}/${id}`)

export const updatePlayer = (id: string, data: Partial<Player>) =>
  Network.patch<Partial<Player>>(`${baseUrl}/${id}`, data)

export const deletePlayer = (id: string) =>
  Network.delete<''>(`${baseUrl}/${id}`)
