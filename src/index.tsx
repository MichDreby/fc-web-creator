import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

import { ClubInfo } from './pages/ClubInfo'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ClubInfo />
  </React.StrictMode>,
)
