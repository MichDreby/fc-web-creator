import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faUsers,
  faCircleInfo,
  faPeopleArrows,
  faFutbol,
  faChevronRight,
  faGear,
  faGears,
  faFolderClosed,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

import { router } from './routing'

library.add(
  faUser,
  faUsers,
  faCircleInfo,
  faPeopleArrows,
  faFutbol,
  faChevronRight,
  faGear,
  faGears,
  faFolderClosed,
  faTrashCan,
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
