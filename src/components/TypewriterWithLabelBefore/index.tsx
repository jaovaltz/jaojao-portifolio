import { Stack, Typography } from '@mui/material'
import { TypeWriterCustom } from './components/TypeWriterCustom'

type TypewriterWithLabelBeforeProps = {
  labelBefore: string
  words: string[]
}

export function TypewriterWithLabelBefore({
  labelBefore,
  words
}: TypewriterWithLabelBeforeProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Typography variant="h2">a simple</Typography>
      <TypeWriterCustom words={words} />
    </Stack>
  )
}
