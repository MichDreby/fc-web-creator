import { FC } from 'react'

import * as icons from '@assets'

import styles from './styles.module.css'

interface SvgIconProps {
  name: string
}

export const SvgIcon: FC<SvgIconProps> = ({ name }) => (
  <img src={icons[name]} className={styles.icon} alt="logo" />
)
