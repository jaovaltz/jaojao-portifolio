import { Typography, TypographyProps } from '@mui/material'
import { Link } from 'react-router-dom'

type LinkCustomType = {
  to: string
  children: React.ReactNode
} & TypographyProps

export function LinkTypographyCustom({
  to,
  children,
  ...props
}: LinkCustomType) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: '#ffffff' }}>
      <Typography variant="h1" fontSize="32px" {...props}>
        {children}
      </Typography>
    </Link>
  )
}
