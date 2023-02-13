import { Player } from '@interfaces'
import { Network } from '@services'

const { REACT_APP_API_URL } = process.env
const playersUrl = `${REACT_APP_API_URL}/players`

export const createPlayer = (data: Player) =>
  Network.post<Player>(`${playersUrl}`, data)

export const listAllPlayers = () => Network.get<Player[]>(`${playersUrl}`)

export const retrievePlayer = (id: string) =>
  Network.get<Player>(`${playersUrl}/${id}`)

export const updatePlayer = (id: string, data: Partial<Player>) =>
  Network.patch<Partial<Player>>(`${playersUrl}/${id}`, data)

export const deletePlayer = (id: string) =>
  Network.delete<''>(`${playersUrl}/${id}`)
