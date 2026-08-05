import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/search/SearchBar'
import MovieCard from './components/movieCard/MovieCard'
import { searchMovies } from './services/omdbMovieService'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async () => {
  if (!searchTerm.trim()) return

  try {
    const data = await searchMovies(searchTerm)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="app">
      <Header />

      <main className="main">
        <SearchBar
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
/>

        <MovieCard
  title="Inception"
  year="2010"
  type="Movie"
  poster="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg"
/>
      </main>
    </div>
  )
}

export default App