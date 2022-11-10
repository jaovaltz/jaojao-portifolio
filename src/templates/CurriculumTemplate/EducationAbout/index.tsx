import { Stack, Typography } from '@mui/material'

import QueryStatsIcon from '@mui/icons-material/QueryStats'
import ScienceIcon from '@mui/icons-material/Science'

export function EducationAbout() {
  return (
    <Stack spacing={1}>
      <Typography fontSize={32} variant="h2" color="#000000">
        Education
      </Typography>
      <Typography fontSize={21} variant="h3" color="#000000">
        <ScienceIcon fontSize="small" /> Data scientist associated -
        Datacamp/2022
      </Typography>
      <Typography fontSize={21} variant="h3" color="#000000">
        <QueryStatsIcon fontSize="small" /> Data analyst associated -
        Datacamp/2022
      </Typography>
    </Stack>
  )
}
