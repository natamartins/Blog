import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])

  const fetchData = async () => {
    await fetch(url)
      .then(res => res.json()
        .then(res => {
          setData(res)
        }))
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data
  }
}


