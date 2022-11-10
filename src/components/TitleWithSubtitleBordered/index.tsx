import { Stack, Typography } from '@mui/material'

type TitleWithSubtitleBorderedType = {
  title: string
  subtitle: string
}

export function TitleWithSubtitleBordered({
  title,
  subtitle
}: TitleWithSubtitleBorderedType) {
  return (
    <Stack>
      <Typography fontSize={50} variant="h1" color="black">
        {title}
      </Typography>
      <Stack border="2px black solid">
        <Typography
          fontSize={32}
          variant="h2"
          color="purple"
          padding="10px"
          textAlign="center"
        >
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  )
}
