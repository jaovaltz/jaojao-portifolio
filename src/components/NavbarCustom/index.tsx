import { Container, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

import { LinkTypographyCustom } from './components/LinkTypographyCustom'
import { AnchorNoReferrer } from 'components/AnchorNoreferrer'

export function NavbarCustom() {
  return (
    <Stack paddingTop="20px" paddingBottom="100px">
      <Container>
        <Stack bgcolor="#212020" padding="30px" borderRadius="20px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <LinkTypographyCustom to="/">Home</LinkTypographyCustom>
            <Stack alignItems="center" direction="row" spacing={4}>
              <LinkTypographyCustom to="/projects">
                Projects
              </LinkTypographyCustom>
              <LinkTypographyCustom to="/cv">CV</LinkTypographyCustom>
              <AnchorNoReferrer
                href="https://github.com/jaovaltz"
                style={{
                  color: 'inherit'
                }}
              >
                <GitHubIcon fontSize="large" />
              </AnchorNoReferrer>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
