import React from 'react'
import TopBar from './ui/TopBar'
import './App.css'
import theme from './ui/theme'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import FooterBar from './ui/FooterBar'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <FooterBar />
      </ThemeProvider>
    </>
  )
}

export default App