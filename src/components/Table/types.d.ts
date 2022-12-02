import { RowData, CellContext, Table } from '@tanstack/react-table'

import { PlayersTableMeta } from './types'

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

export interface PlayersTableMeta {
  tableData: Player[]
  setTableData: React.Dispatch<React.SetStateAction<Player[]>>
  editableRowId: null | string
  setEditableRowId: React.Dispatch<React.SetStateAction<string | null>>
}

export type RawCellProps<CellValue> = CellContext<Player, CellValue> & {
  table: Table<Player> & {
    options: {
      meta: PlayersTableMeta
    }
  }
}

export type CellProps<CellValue> = RawCellProps<CellValue> & {
  isRowEditable: boolean
}

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> extends PlayersTableMeta {}
}
