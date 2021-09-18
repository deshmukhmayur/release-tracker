import { useEffect, useState } from "preact/hooks"
import { repository } from "../services/github"

export default function useRepo (repoId: string) {
  const [repo, setRepo] = useState<Repository>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    repository(repoId)
      .then(setRepo)
      .catch(err => {
        setRepo(undefined)
      })
      .then(() => setLoading(false))
  }, [repoId])

  return { repo, loading }
}
