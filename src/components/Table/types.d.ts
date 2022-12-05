import { Player } from '@interfaces'
import { RowData, CellContext, Table } from '@tanstack/react-table'

import { PlayersTableMeta } from './types'

export interface PlayersTableMeta {
  tableData: Player[]
  setTableData: React.Dispatch<React.SetStateAction<Player[]>>
  updateCellData: (rowIndex: number, columnId: string, nextValue: any) => void
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
