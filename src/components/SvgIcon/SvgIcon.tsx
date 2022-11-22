import * as icons from '@assets'

import styles from './styles.module.css'

export const SvgIcon = ({ name }) => (
  <img src={icons[name]} className={styles.icon} alt="logo" />
)
