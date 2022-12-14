export interface Player {
  id?: string
  first_name: string
  last_name: string
  shirt_name: string
  position: string
  birthday: string
  nationality: string
  shirt_number: number
  contract_start: string
  contract_end: string
}

export type PlayerPosition =
  | 'goalkeeper'
  | 'defender'
  | 'midfielder'
  | 'striker'
  | 'manager'
  | 'coach'
  | 'stuff'
