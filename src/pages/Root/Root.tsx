import { Link, Outlet } from 'react-router-dom'
import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import styles from './styles.module.css'

export const Root = () => (
  <div className={styles.container}>
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon icon={'futbol'} className={styles.logoIcon} />
        <span className={styles.logoLabel}>Football Club</span>
      </div>

      <ul className={styles.listContainer}>
        <NavbarItem path={'info'} label={'Info'} iconName={'circle-info'} />
        <NavbarItem path={'squad'} label={'Squad'} iconName={'users'} />
        <NavbarItem path={'users'} label={'Users'} iconName={'people-arrows'} />
      </ul>

      <div>
        <NavbarItem path={'profile'} label={'Profile'} iconName={'user'} />
      </div>
    </nav>

    <div className={styles.contentContainer}>
      <Outlet />
    </div>
  </div>
)

interface NavbarItemProps {
  path: string
  label: string
  iconName: IconProp
}

export const NavbarItem: FC<NavbarItemProps> = ({ path, label, iconName }) => (
  <li className={styles.navbarItemContainer}>
    <Link to={path} className={styles.link}>
      <FontAwesomeIcon icon={iconName} className={styles.listItemIcon} />
      {label}
    </Link>
  </li>
)
