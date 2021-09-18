import { useEffect, useState } from 'preact/hooks'
import { readme } from '../services/github'
import decodeBase64 from '../utils/decodeBase64'

interface IReadmeProps {
  repoId: string
}

export default function Readme({ repoId }: IReadmeProps) {
  const [contents, setContents] = useState('')

  useEffect(() => {
    readme(repoId)
      .then(res => {
        setContents(res.content)
      })
  }, [repoId])

  return (
    <>
      <pre>
        {decodeBase64(contents)}
      </pre>
    </>
  )
}
