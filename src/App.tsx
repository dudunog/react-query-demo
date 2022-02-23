import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { SuperHeroesPage } from './components/SuperHeroes'
import { RQSuperHeroesPage } from './components/RQSuperHeroes'
import { HomePage } from './components/Home'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
