import type { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  onClick: () => void
  isFavorite: boolean
  onFavoriteClick: () => void
}

function MovieCard({
  movie,
  onClick,
  isFavorite,
  onFavoriteClick,
}: MovieCardProps) {
  const poster =
    movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://via.placeholder.com/300x450?text=No+Poster'

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