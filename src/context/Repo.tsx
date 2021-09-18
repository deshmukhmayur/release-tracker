import { ComponentChildren, createContext } from 'preact'
import { useMemo } from 'preact/hooks'
import { useParams } from 'react-router-dom'
import useRepo from '../hooks/useRepo'

export const RepoContext = createContext<IRepoContext>({} as any)

interface IRepoContextProps {
  children: ComponentChildren
}
export default function RepoContextProvider({ children }: IRepoContextProps) {
  const { owner, repoName } = useParams<RouteParams>()

  const repoId = useMemo(() => {
    return `${owner}/${repoName}`
  }, [owner, repoName])

  const { repo, loading } = useRepo(repoId)

  return (
    <RepoContext.Provider value={{ repo, loading, repoId, repoName, owner }}>
      {children}
    </RepoContext.Provider>
  )
}
