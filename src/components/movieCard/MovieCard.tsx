type MovieCardProps = {
  title: string
  year: string
  type: string
  poster: string
  onClick: () => void
}

function MovieCard({
  title,
  year,
  type,
  poster,
  onClick,
}: MovieCardProps) {
  return (
    <button
      type="button"
      className="movie-card"
      onClick={onClick}
    >
      <img
        className="movie-card__poster"
        src={poster}
        alt={title}
      />

      <div className="movie-card__content">
        <h2 className="movie-card__title">{title}</h2>

        <p className="movie-card__meta">
          {year} • {type}
        </p>
      </div>
    </button>
  )
}

export default MovieCard