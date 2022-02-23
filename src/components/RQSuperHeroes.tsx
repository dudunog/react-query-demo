import axios from 'axios'
import { useQuery } from 'react-query'
import { SuperHeroes } from '../interfaces/super-heroes'

export function RQSuperHeroesPage() {
  const { isLoading, data } = useQuery<SuperHeroes[]>('super-heroes', async () => {
    const response = await axios.get('http://localhost:4000/superheroes')

    return response.data
  })

  if (isLoading) {
    return <div>Loading...</div>
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
