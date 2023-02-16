import React from 'react'
import { Container, ThemeProvider } from "@mui/material";
import theme from './styling/themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='xl'>
      {/* Appbar */}
      {/* Banner */}
      {/* Search */}
      {/* DataGrid */}
      {/* Footer */}
    </Container>
    </ThemeProvider>
  );
}

export default App;
