const API_KEY = import.meta.env.VITE_OMDB_API_KEY

const BASE_URL = 'https://www.omdbapi.com/'

const buildSearchUrl = (query: string) => {
  return `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
}

const searchMovies = async (query: string) => {
  const response = await fetch(buildSearchUrl(query))

  if (!response.ok) {
    throw new Error('Failed to fetch movies.')
  }

  const data = await response.json()

  return data
}

const getMovieDetails = async (imdbID: string) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch movie details.')
  }

  const data = await response.json()

  return data
}

export {
  API_KEY,
  BASE_URL,
  buildSearchUrl,
  searchMovies,
  getMovieDetails,
}