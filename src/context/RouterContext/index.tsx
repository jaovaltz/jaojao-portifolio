import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'
import { LoaderCustom } from 'components/LoaderCustom'

type RouterType = {
  children: ReactNode
}

type RouterContextType = {
  loading: boolean
  setLoading: (loading: boolean) => void
}

const RouterContext = createContext({} as RouterContextType)

export function RouterContextProvider({ children }: RouterType) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  return (
    <RouterContext.Provider value={{ loading, setLoading }}>
      {children}
      <LoaderCustom open={loading} />
    </RouterContext.Provider>
  )
}

export function useRouterContext() {
  return useContext(RouterContext)
}
