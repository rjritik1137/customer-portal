import axios from 'axios'
import { useEffect, useState } from 'react'
import { Customer } from '../components/Customer/types'

function useCustomers(pageNumber: number) {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    let cleanup = false
    const controller = new AbortController()
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: `http://localhost:3000/user`,
      params: { page: pageNumber },
      signal: controller.signal,
    })
      .then((response) => {
        const p = () => {
          if (cleanup) return
          if (response.data) {
            setCustomers((prev) => [...prev, ...response.data])
            setHasMore(true)
          } else {
            setHasMore(false)
          }
          setLoading(false)
        }
        // setTimeout(p, 1000) if you want to see the loading view then comment below line and uncomment this one.
        p()
      })
      .catch(() => {
        if (cleanup) return
        setError(true)
        setLoading(false)
      })
    return () => {
      cleanup = true
      controller.abort()
    }
  }, [pageNumber])
  return { customers, hasMore, loading, error }
}
export { useCustomers }
