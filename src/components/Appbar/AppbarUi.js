import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';

const AppbarUi = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    {matches ? <AppbarMobile /> : <AppbarDesktop />}
    </>
  )
}

export default AppbarUi