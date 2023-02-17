import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography:{
      fontFamily:[
        'Josefin Sans', 
        'sans-serif'
      ].join(','),
    },
    // palette: {
    //   mode: 'dark',
    // },
  })

export default theme;