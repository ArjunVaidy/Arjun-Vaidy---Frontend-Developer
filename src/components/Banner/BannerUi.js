import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import BannerDesktop from './BannerDesktop';
import BannerMobile from './BannerMobile';

const BannerUi = () => { 

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));    
  return (
    <>
    {matches ? <BannerMobile /> : <BannerDesktop />}
    </>
  )
}

export default BannerUi