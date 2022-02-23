import { useEffect, useState } from "react"
import axios from "axios"
import { SuperHeroes } from '../interfaces/super-heroes'

export function SuperHeroesPage() {
  const [data, setData] = useState<SuperHeroes[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get<SuperHeroes[]>('http://localhost:4000/superheroes')
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
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
