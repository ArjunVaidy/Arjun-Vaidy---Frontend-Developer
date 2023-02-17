import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo  from "../../Assets/spacex.svg";


const AppbarDesktop = () => {
  return (
  <>
  <AppBar sx={{background:'#000000'}}>
    <Toolbar>
    <img src={Logo} alt="SpaceX" width='30%' height='auto' />
    </Toolbar>
  </AppBar>
  <Toolbar />
  </>
  )
}

export default AppbarDesktop