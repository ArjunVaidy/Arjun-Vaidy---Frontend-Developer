import React, { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from "@mui/material";
import {useDispatch} from 'react-redux'
import theme from './styling/themes/theme';
import AppbarUi from './components/Appbar/AppbarUi';
import BannerUi from './components/Banner/BannerUi';
import { getCapsules } from './redux/getCapsulesList';
import DataGridUi from './components/DataGrid/DataGridUi';
import Footer from './components/Footer/Footer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapsules())
  },[dispatch])


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <AppbarUi />
      <BannerUi />
      <DataGridUi />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
