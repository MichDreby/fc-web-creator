export enum CLUB_INFO_FORM {
  NAME = 'NAME',
  VENUE = 'VENUE',
  FOUNDED = 'FOUNDED',
  CLUB_COLORS = 'CLUB_COLORS',
  WEBSITE = 'WEBSITE',
}

export interface IClubInfoForm {
  [CLUB_INFO_FORM.NAME]: string
  [CLUB_INFO_FORM.VENUE]: string
  [CLUB_INFO_FORM.CLUB_COLORS]: string
  [CLUB_INFO_FORM.FOUNDED]: string
  [CLUB_INFO_FORM.WEBSITE]: string
}
