import { createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

import '../../fonts/Inter/index.css'
import '../../fonts/Soleil/index.css'

export const theme = createTheme(
  {
    palette: {
      text: {
        primary: '#ffffff'
      }
    },
    typography: {
      fontFamily: 'SoleilRegular, sans-serif',
      h1: {
        fontFamily: 'SoleilBold',
        fontSize: '4.5rem'
      },
      h2: {
        fontFamily: 'SoleilBold'
      },
      h3: {
        color: '#000000'
      }
    }
  },
  ptBR
)
