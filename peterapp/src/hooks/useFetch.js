import { useState, useEffect } from 'react'
import axios from 'axios'

import useLocalStorage from './useLocalStorage'

export default url => {
  const baseUrl = 'http://localhost:5000/api'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  const [token] = useLocalStorage('token')

  console.log('token', token)

  const doFetch = (options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    }
    if (!isLoading) {
      return
    }
    axios(baseUrl + url, requestOptions)
      .then(res => {
        console.log('succes', res)
        setIsLoading(false)
        setResponse(res.data)
      })
      .catch(error => {
        console.log('error', error)
        setIsLoading(false)
        setError(error.response.data)
      })
  }, [isLoading, options, url, token])

  return [{ isLoading, response, error }, doFetch]
}

