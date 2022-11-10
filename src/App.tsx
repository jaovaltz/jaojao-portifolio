import { CssBaseline, ThemeProvider } from '@mui/material'

import { Router } from 'routes'
import { theme } from 'global/styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
