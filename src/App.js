import React from 'react'
import Navigation from './modules/navigation/Navigation'
import Main from './modules/Main'

export default function App() {

  return (
    <div>
      <Navigation />

      <div className="container">
       <Main />
      </div>
      
    </div>
  )
}
