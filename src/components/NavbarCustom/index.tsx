import { Container, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import { LinkTypographyCustom } from './components/LinkTypographyCustom'

export function NavbarCustom() {
  return (
    <Container maxWidth="xl" sx={{ padding: '20px', paddingBottom: '100px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <LinkTypographyCustom to="/">Home</LinkTypographyCustom>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={4}>
          <LinkTypographyCustom to="/curriculum">
            Curriculum
          </LinkTypographyCustom>
          <a
            href="https://github.com/jaovaltz"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'inherit'
            }}
          >
            <GitHubIcon fontSize="large" />
          </a>
        </Stack>
      </Stack>
    </Container>
  )
}
