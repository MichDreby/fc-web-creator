import { Team } from '@interfaces'
import { Network } from '@services'

const baseUrl =
  'https://kf894hw6q9.execute-api.eu-west-1.amazonaws.com/dev/team'

export const createTeam = (data: Team) => Network.post<Team>(`${baseUrl}`, data)

export const listAllTeams = () => Network.get<Team[]>(baseUrl)

export const updateTeam = (id: string, data: Partial<Team>) =>
  Network.patch<Partial<Team>>(`${baseUrl}/${id}`, data)
