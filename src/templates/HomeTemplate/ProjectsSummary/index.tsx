import { Container, Stack, Typography } from '@mui/material'

import { ProjectSummaryCustom } from 'components/ProjectSummaryCustom'
import { projectsSummaryData } from './data'

export function ProjectsSummary() {
  return (
    <Stack alignItems="center" paddingTop="150px" spacing={7}>
      <Stack spacing={-0.5}>
        <Typography variant="h2" fontSize={36}>
          Some projects that i made...
        </Typography>
        <Typography>
          You can check all the codes on my github profile{' '}
          <a
            href="https://github.com/jaovaltz?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            clicking here
          </a>
        </Typography>
      </Stack>
      <Container>
        <ProjectSummaryCustom projectsSummaryData={projectsSummaryData} />
      </Container>
    </Stack>
  )
}
