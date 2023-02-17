import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from "../../Assets/spacex.svg";


const AppbarMobile = () => {
  return (
  <>
  <AppBar sx={{background:'#000000'}}>
    <Toolbar>
        <img src={Logo} alt="SpaceX" width='50%' height='auto' />
    </Toolbar>
  </AppBar>
  <Toolbar />
  </>
  )
}

export default AppbarMobile