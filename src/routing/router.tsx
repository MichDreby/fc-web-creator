import { createBrowserRouter } from 'react-router-dom'

import {
  Root,
  Error,
  ClubInfo,
  Squad,
  Users,
  Profile,
  Settings,
  News,
  NewsDetails,
} from '@pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/info',
        element: <ClubInfo />,
      },
      {
        path: '/squad',
        element: <Squad />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/news/:newsId',
        element: <NewsDetails />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])
