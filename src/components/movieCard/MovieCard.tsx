type MovieCardProps = {
  title: string
  year: string
  type: string
  poster: string
}

function MovieCard({ title, year, type, poster }: MovieCardProps) {
  return (
    <article className="movie-card">
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
    </article>
  )
}

export default MovieCard