import { useEffect, useState } from "react"
import axios from "axios"
import { SuperHeroes } from '../interfaces/super-heroes'

export function SuperHeroesPage() {
  const [data, setData] = useState<SuperHeroes[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get<SuperHeroes[]>('http://localhost:4000/superheroesa')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
