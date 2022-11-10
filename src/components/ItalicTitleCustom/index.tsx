import { Typography, TypographyProps } from '@mui/material'

type ItalicTitleCustomType = {
  title: string
} & TypographyProps

export function ItalicTitleCustom({ title, ...props }: ItalicTitleCustomType) {
  return (
    <Typography
      fontSize={84}
      fontStyle="italic"
      textAlign="center"
      sx={{ fontStyle: 'italic' }}
      variant="h1"
      {...props}
    >
      {title}
    </Typography>
  )
}
