
import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function request(url, options) {

    try {
      setLoading(true)
      const response = await fetch(url, response)
      const json = response.json()
      setData(json)
    } catch (erro) {
      setError('Erro')
    } finally {
      setLoading(false)
    }


  }

  return { data, error, loading, request }
}

export default useFetch