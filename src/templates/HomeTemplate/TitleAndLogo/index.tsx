import { Stack, Typography } from '@mui/material'

import { ItalicTitleCustom } from 'components/ItalicTitleCustom'
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
        <ItalicTitleCustom title="Hello there!" />
        <Typography lineHeight={{ md: 0.5, sm: 1 }} variant="h2">
          I am João Vitor Santin
        </Typography>
        <TypewriterWithLabelBefore
          labelBefore="a simple"
          words={['chef?', 'developer?', 'engineer?']}
        />
      </Stack>
      <img style={{ height: '500px' }} src={astronautLogo} alt="logo" />
    </Stack>
  )
}
