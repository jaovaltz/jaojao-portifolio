import { Container, Stack, Typography } from '@mui/material'

import { AboutMe } from './AboutMe'
import { EnteredJobs } from './EnteredJobs'
import { EducationAbout } from './EducationAbout'
import { DownloadCV } from './DownloadCV'
import { CurriculumStack } from 'components/CurriculumStack'

export function CurriculumTemplate() {
  return (
    <Container maxWidth="md">
      <CurriculumStack>
        <Stack>
          <Typography fontSize={50} variant="h1" color="black">
            João Vitor Santin Valduga
          </Typography>
          <Stack border="2px black solid">
            <Typography
              fontSize={32}
              variant="h2"
              color="purple"
              padding="10px"
              textAlign="center"
            >
              Computer science student
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <AboutMe />
          <EducationAbout />
          <EnteredJobs />
        </Stack>
      </CurriculumStack>
      <DownloadCV />
    </Container>
  )
}
