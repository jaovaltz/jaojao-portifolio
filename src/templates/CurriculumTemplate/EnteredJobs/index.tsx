import { Stack, Typography } from '@mui/material'
import { enteredJobsData } from './data'

export function EnteredJobs() {
  return (
    <Stack spacing={2}>
      <Typography fontSize={32} variant="h2" color="#000000">
        Entered jobs
      </Typography>
      <Stack spacing={2}>
        {enteredJobsData.map((job, key) => (
          <Stack>
            <Typography fontSize={20} variant="h2" color="#000000">
              {job.title}
            </Typography>
            <Typography fontSize={16} variant="h3" color="#000000">
              {job.description}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
