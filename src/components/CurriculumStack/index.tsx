import { Stack, StackProps } from '@mui/material'

type CurriculumStackType = {
  children: React.ReactNode
} & StackProps

export function CurriculumStack({ children, ...props }: CurriculumStackType) {
  return (
    <Stack
      {...props}
      alignItems="center"
      bgcolor="white"
      borderRadius={5}
      padding="50px"
      spacing={5}
    >
      {children}
    </Stack>
  )
}
