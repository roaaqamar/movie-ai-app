import { useEffect, useState } from 'react'
import { getMovieDetails } from '../../services/omdbMovieService'

type Movie = {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

type MovieDetails = Movie & {
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Actors: string
  Plot: string
  imdbRating: string
}

type MovieModalProps = {
  movie: Movie
  onClose: () => void
}

function MovieModal({ movie, onClose }: MovieModalProps) {
  const [details, setDetails] = useState<MovieDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadMovieDetails = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await getMovieDetails(movie.imdbID)

        if (data.Response === 'True') {
          setDetails(data)
        } else {
          setError(data.Error || 'Failed to load movie details.')
        }
      } catch (error) {
        console.error(error)
        setError('Failed to load movie details.')
      } finally {
        setLoading(false)
      }
    }

    loadMovieDetails()
  }, [movie.imdbID])

  return (
    <div className="movie-modal" onClick={onClose}>
      <div
        className="movie-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="movie-modal__close"
          onClick={onClose}
          aria-label="Close movie details"
        >
          ×
        </button>

        {loading ? (
          <p className="status-message">Loading movie details...</p>
        ) : error ? (
          <p className="status-message error">{error}</p>
        ) : details ? (
          <>
            <img
              className="movie-modal__poster"
              src={details.Poster}
              alt={details.Title}
            />

            <div className="movie-modal__info">
              <h2>{details.Title}</h2>

              <p>
                {details.Year} • {details.Runtime}
              </p>

              <p>
                <strong>Genre:</strong> {details.Genre}
              </p>

              <p>
                <strong>Director:</strong> {details.Director}
              </p>

              <p>
                <strong>Actors:</strong> {details.Actors}
              </p>

              <p>
                <strong>IMDb Rating:</strong> {details.imdbRating}
              </p>

              <p>
                <strong>Plot:</strong> {details.Plot}
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default MovieModal