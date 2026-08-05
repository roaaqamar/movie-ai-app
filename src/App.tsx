import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/search/SearchBar'
import MovieCard from './components/movieCard/MovieCard'
import { searchMovies } from './services/omdbMovieService'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<any[]>([])

  const handleSearch = async () => {
  if (!searchTerm.trim()) return

  try {
    const data = await searchMovies(searchTerm)

if (data.Response === 'True') {
  setMovies(data.Search)
} else {
  setMovies([])
}
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

       <div className="movies-grid">
 {movies.map((movie) => (
  <MovieCard
    key={movie.imdbID}
    title={movie.Title}
    year={movie.Year}
    type={movie.Type}
    poster={movie.Poster}
  />
))}
</div>
      </main>
    </div>
  )
}

export default App