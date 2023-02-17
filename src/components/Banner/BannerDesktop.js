import { Grid, Typography } from '@mui/material'
import React from 'react'
import Rocket from '../../Assets/rocket.jpg'

const BannerDesktop = () => {
  return (
    <Grid container>
    <Grid item xs={6}>
    <img src={Rocket} alt='Rocket' width='100%' height='auto' />
    </Grid>
    <Grid item xs={6} container direction='column' justifyContent='center' p={2}>
        <Typography variant='h6' textAlign='center'>
          "I know I'm devastatingly good looking but you gotta stop staring at me."
        </Typography>
    <Grid item>
        <Typography variant='h6' textAlign='end'>-Earth</Typography>
    </Grid>
        </Grid>
    </Grid>
  )
}

export default BannerDesktop