import { Link, Outlet } from 'react-router-dom'

import { NavbarItem } from '@components'

import styles from './styles.module.css'

export const Root = () => (
  <div className={styles.container}>
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <div className={styles.logRectangle} />
          <span className={styles.logoLabel}>extremely</span>
        </div>
      </div>
      <div className={styles.profileContainer}>
        <Link to={'/profile'}>
          <img
            src="https://ak.picdn.net/contributors/164575/avatars/thumb.jpg?t=5563986"
            alt="profile"
            className={styles.profileImage}
          />
          <p className={styles.profileNameLabel}>Mich Dreby</p>
          <p className={styles.profileTitleLabel}>CEO</p>
        </Link>
      </div>

      <ul className={styles.listContainer}>
        <NavbarItem path={'info'} label={'Info'} iconName={'circle-info'} />
        <NavbarItem path={'squad'} label={'Squad'} iconName={'users'} />
        <NavbarItem path={'users'} label={'Users'} iconName={'people-arrows'} />
      </ul>
    </nav>

    <div className={styles.contentContainer}>
      <Outlet />
    </div>
  </div>
)
