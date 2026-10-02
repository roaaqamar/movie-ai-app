import type { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  onClick: () => void
  isFavorite: boolean
  onFavoriteClick: () => void
}

const FALLBACK_POSTER = '/no-poster.svg'

function MovieCard({
  movie,
  onClick,
  isFavorite,
  onFavoriteClick,
}: MovieCardProps) {
  const poster =
    movie.Poster && movie.Poster !== 'N/A'
      ? movie.Poster
      : FALLBACK_POSTER

  return (
    <article className="movie-card">
      <button
        type="button"
        className="movie-card__main"
        onClick={onClick}
      >
        <img
          className="movie-card__poster"
          src={poster}
          alt={movie.Title}
          onError={(event) => {
            if (!event.currentTarget.src.includes('no-poster.svg')) {
              event.currentTarget.src = FALLBACK_POSTER
            }
          }}
        />

        <div className="movie-card__content">
          <h2 className="movie-card__title">
            {movie.Title}
          </h2>

          <p className="movie-card__meta">
            {movie.Year} • {movie.Type}
          </p>
        </div>
      </button>

      <button
        type="button"
        className={`movie-card__favorite ${
          isFavorite ? 'is-favorite' : ''
        }`}
        onClick={onFavoriteClick}
        aria-label={
          isFavorite
            ? `Remove ${movie.Title} from favorites`
            : `Add ${movie.Title} to favorites`
        }
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </article>
  )
}

export default MovieCard