import { Team } from '@interfaces'
import { Network } from '@services'

const { REACT_APP_API_URL } = process.env
const teamUrl = `${REACT_APP_API_URL}/team`

export const createTeam = (data: Team) => Network.post<Team>(`${teamUrl}`, data)

export const retrieveTeam = () => Network.get<Team>(teamUrl)

export const updateTeam = (data: Partial<Team>) =>
  Network.patch<Partial<Team>>(`${teamUrl}`, data)
