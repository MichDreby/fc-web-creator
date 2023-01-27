import { API_URL } from '@constants'
import { Team } from '@interfaces'
import { Network } from '@services'

const teamUrl = `${API_URL}/team`

export const createTeam = (data: Team) => Network.post<Team>(`${teamUrl}`, data)

export const retrieveTeam = () => Network.get<Team>(teamUrl)

export const updateTeam = (data: Partial<Team>) =>
  Network.patch<Partial<Team>>(`${teamUrl}`, data)
