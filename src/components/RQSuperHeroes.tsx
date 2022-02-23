import axios from 'axios'
import { useQuery } from 'react-query'
import { SuperHeroes } from '../interfaces/super-heroes'

export function RQSuperHeroesPage() {
  const { isLoading, data, isError, error } = useQuery<SuperHeroes[]>('super-heroes', async () => {
    const response = await axios.get('http://localhost:4000/superheroesa')

    return response.data
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <h2>{(error as TypeError).message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      {data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
