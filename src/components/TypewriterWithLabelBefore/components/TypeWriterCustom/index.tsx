import { Typography } from '@mui/material'
import TypeWriter from 'typewriter-effect'

type TypeWriterCustomProps = {
  words: string[]
}

export function TypeWriterCustom({ words }: TypeWriterCustomProps) {
  return (
    <Typography variant="h2" color="#800080">
      <TypeWriter
        options={{
          strings: words,
          autoStart: true,
          loop: true
        }}
      />
    </Typography>
  )
}
