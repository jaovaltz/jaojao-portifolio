import { Stack } from '@mui/material'
import { TitleAndLogo } from './TitleAndLogo'
import { ProjectsSummary } from './ProjectsSummary'

export function HomeTemplate() {
  return (
    <Stack justifyContent="center" paddingBottom="20px">
      <TitleAndLogo />
      <ProjectsSummary />
    </Stack>
  )
}
