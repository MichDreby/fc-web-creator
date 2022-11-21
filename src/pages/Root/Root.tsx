import { Link, Outlet } from 'react-router-dom'

import styles from './styles.module.css'

export const Root = () => (
  <div className={styles.container}>
    <nav className={styles.navbarContainer}>
      <ul>
        <li>
          <Link to={`club_info`}>club_info</Link>
        </li>
        <li>
          <Link to={`squad`}>squad</Link>
        </li>
        <li>
          <Link to={`users`}>users</Link>
        </li>
        <li>
          <Link to={`profile`}>profile</Link>
        </li>
      </ul>
    </nav>

    <div className={styles.contentContainer}>
      <Outlet />
    </div>
  </div>
)
