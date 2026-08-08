export type Movie = {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

export type MovieDetails = Movie & {
  Runtime: string
  Genre: string
  Director: string
  Actors: string
  imdbRating: string
  Plot: string
}