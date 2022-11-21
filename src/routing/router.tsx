import { createBrowserRouter } from 'react-router-dom'

import { Root, Error, ClubInfo, Squad, Users, Profile } from '@pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'club_info',
        element: <ClubInfo />,
      },
      {
        path: 'squad',
        element: <Squad />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])
