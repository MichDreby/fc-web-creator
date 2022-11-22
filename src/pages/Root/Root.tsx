import { Link, Outlet } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

export const Root = () => (
  <div className={styles.container}>
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon
          icon={'fa-regular fa-futbol'}
          className={styles.logoIcon}
        />
        <span className={styles.logoLabel}>Football Club</span>
      </div>

      <ul className={styles.listContainer}>
        <NavbarItem path={'info'} label={'Info'} iconName={'fa-circle-info'} />
        <NavbarItem path={'squad'} label={'Squad'} iconName={'fa-users'} />
        <NavbarItem
          path={'users'}
          label={'Users'}
          iconName={'fa-people-arrows'}
        />
      </ul>

      <div>
        <NavbarItem path={'profile'} label={'Profile'} iconName={'fa-user'} />
      </div>
    </nav>

    <div className={styles.contentContainer}>
      <Outlet />
    </div>
  </div>
)

export const NavbarItem = ({ path, label, iconName }) => (
  <li className={styles.navbarItemContainer}>
    <Link to={path} className={styles.link}>
      <FontAwesomeIcon icon={iconName} className={styles.listItemIcon} />
      {label}
    </Link>
  </li>
)
