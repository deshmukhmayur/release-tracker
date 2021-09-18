import { useContext, useMemo } from 'preact/hooks'
import { Link } from 'react-router-dom'
import ReleaseList from '../components/ReleaseList'
import Readme from '../components/Readme'
import useQueryParams from '../hooks/useQueryParams'
import { RepoContext } from '../context/Repo'

export default function Repository() {
  const { getParam } = useQueryParams()

  const { repoId, repo, loading } = useContext(RepoContext)

  const activeTab = useMemo(() => {
    return getParam('tab')
  }, [getParam])

  if (loading) {
    return <>Loading...</>
  }

  if (!repo) {
    return <>Not found</>
  }

  return (
    <>
      <header>
        <span>icon</span>
        <h1>{repo.full_name}</h1>
        <span>⭐ {repo.stargazers_count}</span>
      </header>

      <p class="description">{repo.description}</p>

      <nav role="navigation">
        <ul>
          <li><Link to="?tab=about">About</Link></li>
          <li><Link to="?tab=releases">Releases</Link></li>
        </ul>
      </nav>
      {(!activeTab || activeTab === 'about') && (
        <Readme repoId={repoId} />
      )}
      {activeTab === 'releases' && (
        <ReleaseList />
      )}
    </>
  )
}
