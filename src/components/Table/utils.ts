import moment from 'moment'

import { Player } from '@interfaces'

export const getRowId = (original: Player) => original?.id || original?.birthday

export const getDefaultPlayerData = (): Player => ({
  first_name: 'First Name',
  last_name: 'LastName',
  shirt_name: 'ShirtName',
  position: 'Striker',
  birthday: moment('1990').format(),
  nationality: 'Belarus',
  shirt_number: 99,
  contract_start: moment('2008').format(),
  contract_end: moment('2024').format(),
})
