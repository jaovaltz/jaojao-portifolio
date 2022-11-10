import { Container, Stack, Typography } from '@mui/material'

import { AnchorNoReferrer } from 'components/AnchorNoreferrer'
import { ItalicTitleCustom } from 'components/ItalicTitleCustom'
import { ProjectSummaryCustom } from 'components/ProjectSummaryCustom'

import { projectsSummaryData } from './data'

export function ProjectsTemplate() {
  return (
    <Stack alignItems="center" spacing={21}>
      <Stack spacing={-0.5}>
        <ItalicTitleCustom title="Projects" />
        <Typography fontSize={14}>
          You can check all the codes on my github profile{' '}
          <AnchorNoReferrer href="https://github.com/jaovaltz?tab=repositories">
            clicking here
          </AnchorNoReferrer>
        </Typography>
      </Stack>
      <Container>
        <ProjectSummaryCustom projectsSummaryData={projectsSummaryData} />
      </Container>
    </Stack>
  )
}
