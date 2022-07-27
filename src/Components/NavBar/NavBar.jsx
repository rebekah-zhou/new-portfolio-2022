import React from 'react'
import NavBarButton from './NavBarButton'
import { v4 as uuidv4 } from 'uuid'

function NavBar() {

  const buttons = ['Home', 'About', 'Projects'].map(button => {
    return <NavBarButton name={button} key={uuidv4()} />
  })

  return (
    <div id='nav-bar'>
      {buttons}
    </div>
  )
}

export default NavBar