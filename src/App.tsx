import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/search/SearchBar'
import MovieCard from './components/movieCard/MovieCard'
import MovieModal from './components/movieModal/MovieModal'
import { searchMovies } from './services/omdbMovieService'
import './App.css'

type Movie = {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const handleSearch = async () => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setError('')

    try {
      const data = await searchMovies(searchTerm)

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setMovies([])
        setError(data.Error)
      }
    } catch (error) {
      console.error(error)
      setMovies([])
      setError('Something went wrong.')
    } finally {
      setLoading(false)
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

        {loading ? (
          <p className="status-message">Loading...</p>
        ) : error ? (
          <p className="status-message error">{error}</p>
        ) : movies.length > 0 ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
                poster={movie.Poster}
                onClick={() => {
                  console.log('Movie clicked:', movie.Title)
                  setSelectedMovie(movie)
                }}
              />
            ))}
          </div>
        ) : (
          <p className="status-message">
            Search for a movie to get started.
          </p>
        )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </main>
    </div>
  )
}

export default App