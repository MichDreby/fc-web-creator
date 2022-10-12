import React from 'react'

import logo from './assets/logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Welcome to FC App creator! https is here! yeeeah!
            Updated serverless to TS config3`}
        </a>
        <p>DrebyDigitals Inc.</p>
      </header>
    </div>
  )
}

export default App
