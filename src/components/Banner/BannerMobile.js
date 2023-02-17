import { Grid, Typography } from '@mui/material'
import React from 'react'
import Rocket from '../../Assets/rocket.jpg'

const BannerMobile = () => {
  return (
    <Grid container direction='column' p={0.25}>
        <Grid item>
            <img src={Rocket} alt='Rocket' width='100%' height='auto' />
        </Grid>
        <Grid item>
        <Typography variant='h6' textAlign='center'>
          "I know I'm devastatingly good looking but you gotta stop staring at me!"
        </Typography>
        </Grid>
        <Grid item>
        <Typography pr={1} variant='h6' textAlign='end'>-Earth</Typography>
        </Grid>
    </Grid>
  )
}

export default BannerMobile