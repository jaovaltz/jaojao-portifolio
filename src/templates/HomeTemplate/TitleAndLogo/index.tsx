import { Stack, Typography } from '@mui/material'

import { TypewriterWithLabelBefore } from 'components/TypewriterWithLabelBefore'
const astronautLogo = require('global/imgs/astronaut-logo.png')

export function TitleAndLogo() {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack>
        <Typography lineHeight={1.7} variant="h1">
          Hello there!
        </Typography>
        <Typography lineHeight={0.5} variant="h2">
          I am João Vitor Santin
        </Typography>
        <TypewriterWithLabelBefore
          labelBefore="a simple"
          words={['chef?', 'engineer?', 'developer?']}
        />
      </Stack>
      <img style={{ height: '500px' }} src={astronautLogo} alt="logo" />
    </Stack>
  )
}
