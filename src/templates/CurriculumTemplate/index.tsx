import { Container, Stack } from '@mui/material'

import { AboutMe } from './AboutMe'
import { EnteredJobs } from './EnteredJobs'
import { EducationAbout } from './EducationAbout'
import { DownloadCV } from './DownloadCV'
import { CurriculumStack } from 'components/CurriculumStack'

import { TitleWithSubtitleBordered } from 'components/TitleWithSubtitleBordered'

export function CurriculumTemplate() {
  return (
    <Container maxWidth="md">
      <CurriculumStack>
        <Stack>
          <TitleWithSubtitleBordered
            title="João Vitor Santin Valduga"
            subtitle="Computer science student"
          />
        </Stack>
        <Stack spacing={2}>
          <AboutMe />
          <EducationAbout />
          <EnteredJobs />
          <DownloadCV />
        </Stack>
      </CurriculumStack>
    </Container>
  )
}
