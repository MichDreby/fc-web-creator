import { CLUB_INFO_FORM_FIELDS } from '@constants'

export interface ClubInfoFormValues {
  [CLUB_INFO_FORM_FIELDS.NAME]: string
  [CLUB_INFO_FORM_FIELDS.VENUE]: string
  [CLUB_INFO_FORM_FIELDS.CLUB_COLORS]: string
  [CLUB_INFO_FORM_FIELDS.FOUNDED]: string
  [CLUB_INFO_FORM_FIELDS.WEBSITE]: string
}
