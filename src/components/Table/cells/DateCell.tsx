import moment from 'moment'
import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { CellProps } from '../types'

import './ReactDatePicker.styles.css'

export const DateCell: FC<CellProps<string>> = ({
  isRowEditable,
  getValue,
}) => {
  const value = moment(getValue()).toDate()

  const [startDate, setStartDate] = useState<null | Date>(value)

  return (
    <div>
      <DatePicker
        disabled={!isRowEditable}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  )
}
