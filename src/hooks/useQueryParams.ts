import { useCallback, useEffect, useState } from 'preact/hooks'
import { useLocation } from 'react-router-dom'

export default function useQueryParams() {
  const [queryParams, setQueryParams] = useState(new URLSearchParams())
  const location = useLocation()

  const getParam = useCallback((key: string) => {
    return queryParams.get(key)
  }, [queryParams])

  useEffect(() => {
    setQueryParams(
      new URLSearchParams(location.search)
    )
  }, [location])

  return { queryParams, getParam }
}
