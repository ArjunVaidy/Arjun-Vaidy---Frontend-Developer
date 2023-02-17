import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import DataGridMobile from './DataGridMobile';
import DataGridDesktop from './DataGridDesktop';

const DataGridUi = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const capsules = useSelector(state => state.capsulesData);

  // Conditional rendering
  if(capsules.loading) {
    return (
      <Typography variant='h6' align='center'>Capsules are arriving...</Typography>
    )
  }

  else {
  return (
    <div style={{marginTop:'2rem'}}>
    <Typography variant='h5' textAlign='center'>All Capsules Arrived</Typography>
    <Typography  textAlign='center'>Search me!</Typography>
    {matches ? <DataGridMobile capsulesList={capsules.capsulesList} /> : <DataGridDesktop capsulesList={capsules.capsulesList} /> }
    </div>
  )
}
}

export default DataGridUi