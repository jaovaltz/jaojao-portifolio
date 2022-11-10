import { Button, Stack } from '@mui/material'

const curriculumPDF = require('global/downloads/curriculumPDF/curriculum.pdf')

export function DownloadCV() {
  return (
    <Stack alignItems="center" padding="15px">
      <Button
        download="jaojao-cv"
        href={curriculumPDF}
        variant="contained"
        color="secondary"
      >
        Download CV (pt-br)
      </Button>
    </Stack>
  )
}
