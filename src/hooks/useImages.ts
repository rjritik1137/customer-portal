import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Pictures } from './types'

function useImages(customerId: string) {
  const [pictures, setPictures] = useState<Pictures>([])
  const [error, setError] = useState(false)
  const controller = useRef(new AbortController())
  const fetchImages = useCallback(() => {
    setError(false)
    axios({
      method: 'GET',
      url: `http://localhost:3000/images/${customerId}`,
      signal: controller.current.signal,
    })
      .then((response) => {
        const images: Array<{ url: string }> = response.data
        setPictures(() => {
          return images.map((item) => item.url)
        })
      })
      .catch(() => {
        setError(true)
      })
  }, [customerId])

  useEffect(() => {
    setPictures([])
  }, [customerId])

  useEffect(() => {
    controller.current = new AbortController()
    fetchImages()
    const interval = setInterval(() => {
      controller.current = new AbortController()
      fetchImages()
    }, 10000)
    return () => {
      controller.current.abort()
      clearInterval(interval)
    }
  }, [fetchImages])
  return { pictures, error }
}

export { useImages }
