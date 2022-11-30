export type Player = {
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

export const defaultData: Player[] = [
  {
    id: '5e589077-fc5b-4518-bbef-c94aa9ec00a4',
    first_name: 'Mich',
    last_name: 'Dreby',
    shirt_name: 'Dreby',
    position: 'striker',
    birthday: '2022-11-09T12:32:56.278Z',
    nationality: 'Belarus',
    shirt_number: 10,
    contract_start: '2022-11-09T12:32:56.278Z',
    contract_end: '2022-11-09T12:32:56.278Z',
  },
  {
    id: '8db45288-d428-4e64-8912-0b7f2fdf3ae7',
    first_name: 'Cristiano',
    last_name: 'Ronaldo',
    shirt_name: 'Ronaldo',
    position: 'striker',
    birthday: '2022-11-09T12:32:56.278Z',
    nationality: 'Portugal',
    shirt_number: 7,
    contract_start: '2022-11-09T12:32:56.278Z',
    contract_end: '2022-11-09T12:32:56.278Z',
  },
  {
    id: '8e9cfcd0-7324-4c8c-a612-b7de4b8fbea2',
    first_name: 'Luis',
    last_name: 'Ronaldo',
    shirt_name: 'Ronaldo',
    position: 'striker',
    birthday: '2022-11-09T12:32:56.278Z',
    nationality: 'Brazil',
    shirt_number: 9,
    contract_start: '2022-11-09T12:32:56.278Z',
    contract_end: '2022-11-09T12:32:56.278Z',
  },
  {
    id: 'f3472a23-395a-450c-9fb2-1aadc990d9f8',
    first_name: 'Jurgen',
    last_name: 'Klopp',
    shirt_name: 'JK',
    position: 'manager',
    birthday: '2022-11-09T12:32:56.278Z',
    nationality: 'German',
    shirt_number: 1000,
    contract_start: '2022-11-09T12:32:56.278Z',
    contract_end: '2022-11-09T12:32:56.278Z',
  },
  {
    id: '8169a51d-d5fd-44f0-924d-653151ff9cb1',
    first_name: 'Zinedin',
    last_name: 'Zidan',
    shirt_name: 'Zidan',
    position: 'midfielder',
    birthday: '2022-11-09T12:31:50.878Z',
    nationality: 'France',
    shirt_number: 10,
    contract_start: '2022-11-09T12:31:50.878Z',
    contract_end: '2022-11-09T12:31:50.878Z',
  },
]
