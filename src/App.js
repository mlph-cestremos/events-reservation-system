import React from 'react'
import Navigation from './modules/navigation/Navigation'
import Main from './modules/Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  library.add(fab, faCalendar)
  return (
    <div className="container">
      <Navigation />
      <Main />
    </div>
  )
}
