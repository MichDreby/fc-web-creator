import { Player } from '@interfaces'
import { RowData, CellContext, Table } from '@tanstack/react-table'

import { PlayersTableMeta } from './types'

export interface PlayersTableMeta {
  tableData: Player[]
  setTableData: React.Dispatch<React.SetStateAction<Player[]>>
  updateCellData: (rowIndex: number, columnId: string, nextValue: any) => void
  editableRowIndex: null | number
  setEditableRowIndex: React.Dispatch<React.SetStateAction<number | null>>
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

export type WithIsNumeric = {
  isNumeric: boolean
}

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> extends PlayersTableMeta {}
}
