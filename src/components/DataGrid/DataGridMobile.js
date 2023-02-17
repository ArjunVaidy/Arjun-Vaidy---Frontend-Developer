import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react'
import PopUp from './PopUp';

const DataGridMobile = ({capsulesList}) => {
    const rowsPerPageOptions = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
    const [initialRows,setInitialRows] = useState(capsulesList);
    const [filterBy, setFilterBy] = React.useState('');
    const [statusFilter, setStatusFilter] = React.useState('');
    const [typeFilter, settTypeFilter] = React.useState('');
    const [launchFilter, setLaunchFilter] = React.useState('');

    // contains all all capsules status and hence below array contains duplicates
    const statusListAll = capsulesList.map(cap => cap.status);
    // Removing duplicates
    const statusListUnique = statusListAll.filter((status,index) => statusListAll.indexOf(status) === index);

    const typeListAll = capsulesList.map(cap => cap.type);
    const typeListUnique = typeListAll.filter((type,index) => typeListAll.indexOf(type) === index);

    const handleChange = (event) => {
        if(event.target.value === 'status') {
            setInitialRows(capsulesList);
            settTypeFilter('');
            setLaunchFilter('');
        }
        if(event.target.value === 'type') {
            setInitialRows(capsulesList);
            setStatusFilter('');
            setLaunchFilter('');
        }
        if(event.target.value === 'original_launch') {
            setInitialRows(capsulesList);
            setStatusFilter('');
            settTypeFilter('');
        }
        setFilterBy(event.target.value);
    };

    const handleStatusFilter = (event) => {
        setStatusFilter(event.target.value)
    }

    const handleTypeFilter = (event) => {
        settTypeFilter(event.target.value)
    }

    const handleLaunchFilter = (event) => {
        setLaunchFilter(event.target.value)
    } 

    const filterRows = () => {
        let temp = [...capsulesList];
        if(filterBy === 'status') {
            let filtered = temp.filter(cap => cap.status === statusFilter);
            setInitialRows(filtered)
            return;
        }
        if(filterBy === 'type') {
            let filtered = temp.filter(cap => cap.type === typeFilter);
            setInitialRows(filtered)
            return;
        }
        if(filterBy === 'original_launch') {
            let filtered = temp.filter(cap => {
                let date1 = new Date(cap.original_launch);
                let date2 = new Date(launchFilter);
                const date1String = date1.toLocaleDateString("en-US");
                const date2String = new Date(date2.getTime() - date2.getTimezoneOffset() * 60000).toLocaleDateString("en-US");
                return date1String === date2String
            })
            setInitialRows(filtered);
            return;
        }
    }
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedData = initialRows.slice(startIndex, endIndex);  

  return (
    <>
    <Grid container direction='column' spacing={2} p={2}>
        <Grid item>
        <FormControl fullWidth>
            <InputLabel id="Filter-by">Filter By</InputLabel>
            <Select
                labelId="Filter-by"
                value={filterBy}
                label="Filter By"
                onChange={handleChange}
            >
          <MenuItem value={'status'}>Status</MenuItem>
          <MenuItem value={'type'}>Type</MenuItem>
          <MenuItem value={'original_launch'}>Original-Launch</MenuItem>
        </Select>
      </FormControl>        
      </Grid>
       {
        filterBy === 'status' ? (
         <Grid item>
         <FormControl fullWidth>
            <InputLabel id="status-by">Status-By</InputLabel>
            <Select
                labelId="status-by"
                value={statusFilter}
                label="Status-By"
                onChange={handleStatusFilter}
            >
                {
                    statusListUnique.map(stat => (
                        <MenuItem key={stat} value={stat}>{stat}</MenuItem>
                    ))
                }
            </Select>
         </FormControl>
         </Grid>
        )
        :
        filterBy === 'type' ? (
            <Grid item>
            <FormControl fullWidth>
               <InputLabel id="type-by">Type-By</InputLabel>
               <Select
                   labelId="type-by"
                   value={typeFilter}
                   label="Type-By"
                   onChange={handleTypeFilter}
               >
                   {
                    typeListUnique.map(typ => (
                        <MenuItem key={typ} value={typ}>{typ}</MenuItem>
                    ))
                   }
               </Select>
            </FormControl>
            </Grid>
           )
           :
           filterBy === 'original_launch' ? (
            <Grid item>
             <TextField 
                InputLabelProps={{shrink: true }}
                type='date' 
                value={launchFilter}
                label='Date-By' 
                fullWidth
                onChange={handleLaunchFilter}/>
            </Grid>
           )
           :
           undefined
       }
    {
    filterBy !== '' && (statusFilter || typeFilter || launchFilter) 
    ?
    <Grid item>
    <Button variant='outlined' onClick={filterRows}>Filter</Button>
    </Grid>
    :
    undefined
    }
    </Grid>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>capsule serial</TableCell>
            <TableCell align='center'>original launch</TableCell>
            <TableCell align='center'>status</TableCell>
            <TableCell align='center'>type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slicedData.map((row) => {
            const date = new Date(row.original_launch);
            const str = date.toUTCString();
           return (
            <TableRow key={row.capsule_serial} onClick={() => {setOpen(true);setDetails(row)}}>
              <TableCell align='center'>{row.capsule_serial}</TableCell>
              <TableCell align='center'>{str}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
              <TableCell align='center'>{row.type}</TableCell>
            </TableRow>
          )})}
        </TableBody>
        <TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                count={initialRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    {open ? <PopUp open={open} details={details} setOpen={setOpen}/> : undefined }
    </>
)
}

export default DataGridMobile