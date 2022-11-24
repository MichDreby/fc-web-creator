import { Link, Outlet, useLocation } from 'react-router-dom'
import { capitalize } from 'lodash'

import { Logo, NavbarItem } from '@components'
import { getRouteByPath } from '@utils'

import styles from './styles.module.css'

export const Root = () => {
  const { pathname } = useLocation()
  const route = getRouteByPath(pathname)

  return (
    <div className={styles.container}>
      <nav className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <ul className={styles.listContainer}>
          <NavbarItem path={'info'} label={'Info'} iconName={'circle-info'} />
          <NavbarItem path={'squad'} label={'Squad'} iconName={'users'} />
          <NavbarItem
            path={'users'}
            label={'Users'}
            iconName={'people-arrows'}
          />
          <NavbarItem path={'settings'} label={'Settings'} iconName={'gears'} />
        </ul>

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
      </nav>

      <div className={styles.contentContainer}>
        <div className={styles.header}>
          <h2 className={styles.headerLabel}>{`${capitalize(route)} page`}</h2>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
