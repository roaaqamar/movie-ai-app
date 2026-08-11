import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/search/SearchBar'
import MovieCard from './components/movieCard/MovieCard'
import MovieModal from './components/movieModal/MovieModal'
import type { Movie } from './types/movie'
import { searchMovies } from './services/omdbMovieService'
import useFavorites from './hooks/useFavorites'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const {
    favorites,
    isFavorite,
    toggleFavorite,
  } = useFavorites()

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
        setError(data.Error || 'No movies found.')
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
          <p className="status-message">
            Loading...
          </p>
        ) : error ? (
          <p className="status-message error">
            {error}
          </p>
        ) : movies.length > 0 ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isFavorite={isFavorite(movie.imdbID)}
                onFavoriteClick={() => toggleFavorite(movie)}
                onClick={() => setSelectedMovie(movie)}
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

{favorites.length > 0 && (
  <section className="favorites-section">
    <h2 className="favorites-title">My Favorites</h2>

    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={true}
          onFavoriteClick={() => toggleFavorite(movie)}
          onClick={() => setSelectedMovie(movie)}
        />
      ))}
    </div>
  </section>
)}      </main>
    </div>
  )
}

export default App