import { Dialog, DialogContent, DialogTitle, Grid, List,Typography } from '@mui/material'
import React from 'react'

const PopUp = ({details,open,setOpen}) => { 
  return (
    <>
    <Dialog onClose={() => setOpen(false)} open={open}>
      <DialogTitle align='center'>Capsule Details</DialogTitle>
    <DialogContent>
    <Grid container direction='column' spacing={1} pl={1} pr={2}>
        <Grid item>
            <Typography>{`capsule_id: ${details.capsule_id}`}</Typography>
        </Grid>
        <Grid item>
            <Typography>{`capsule_serial: ${details.capsule_serial}`}</Typography>
        </Grid>
        <Grid item>
            <Typography>{`details: ${details.details}`}</Typography>
        </Grid>
        <Grid item>
            <Typography>Missions:</Typography>
            {
                <List>
                    {
                        details.missions.map((mission,index) => (
                            <Typography key={`${mission.name} ${mission.flight}`}>{`${index+1}) ${mission.name}`}</Typography>
                        ))
                    }
                </List>
            }
        </Grid>
        <Grid item>
            <Typography>{`status: ${details.status}`}</Typography>
        </Grid>
        <Grid item>
            <Typography>{`type: ${details.type}`}</Typography>
        </Grid>
    </Grid>
    </DialogContent>
    </Dialog>
    </>
  )
}

export default PopUp