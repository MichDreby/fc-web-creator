import { Outlet } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarItem } from '@components'

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
