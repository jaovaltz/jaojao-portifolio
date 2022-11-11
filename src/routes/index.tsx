import { Routes, Route, HashRouter } from 'react-router-dom'
import { Stack } from '@mui/material'

import { HomePage } from 'pages/HomePage'
import { CurriculumPage } from 'pages/CurriculumPage'
import { ProjectsPage } from 'pages/ProjectsPage'

import { InfinitelySpaceBackground } from 'components/InfinitelySpaceBackground'
import { NavbarCustom } from 'components/NavbarCustom'

import { RouterContextProvider } from 'context/RouterContext'

export function Router() {
  return (
    <Stack padding="20px" paddingBottom="100px">
      <RouterContextProvider>
        <HashRouter>
          <NavbarCustom />
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/projects" element={<ProjectsPage />} />
            <Route index path="/cv" element={<CurriculumPage />} />
          </Routes>
          <InfinitelySpaceBackground />
        </HashRouter>
      </RouterContextProvider>
    </Stack>
  )
}
