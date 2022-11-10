import { Stack, Typography } from '@mui/material'

export function ProjectSummaryCustom({ projectsSummaryData }: any) {
  return (
    <Stack spacing={3}>
      {projectsSummaryData?.map((project: any, key: number) => {
        const isKeyEven = key % 2 === 0

        const directionAlign = isKeyEven ? 'row' : 'row-reverse'
        const textAlign = isKeyEven ? 'left' : 'right'

        return (
          <Stack
            key={key}
            direction={{ md: directionAlign, sm: 'column' }}
            alignItems="center"
            spacing={3}
          >
            <img
              style={{ height: '250px', borderRadius: '20px' }}
              src={project.img}
              alt={`${project.title} img`}
            />
            <Stack>
              <Typography
                textAlign={textAlign}
                paddingLeft="50px"
                fontSize={22}
                variant="h2"
              >
                {project.title}
              </Typography>
              <Typography
                textAlign={textAlign}
                paddingLeft="30px"
                fontSize={20}
              >
                {project.description}
              </Typography>
            </Stack>
          </Stack>
        )
      })}
    </Stack>
  )
}
