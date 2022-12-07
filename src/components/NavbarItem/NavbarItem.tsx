import { Link } from 'react-router-dom'
import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import styles from './styles.module.css'

interface NavbarItemProps {
  path: string
  label: string
  iconName: IconProp
}

export const NavbarItem: FC<NavbarItemProps> = ({ path, label, iconName }) => (
  <li className={styles.container}>
    <Link
      to={path}
      className={styles.link}
    >
      <FontAwesomeIcon
        icon={iconName}
        className={styles.icon}
      />
      {label}
      <FontAwesomeIcon
        icon={'chevron-right'}
        className={styles.chevronIcon}
      />
    </Link>
  </li>
)
