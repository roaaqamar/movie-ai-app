import { useEffect, useState } from 'react'
import type { Movie } from '../types/movie'

const STORAGE_KEY = 'movie-ai-favorites'

function useFavorites() {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const savedFavorites = localStorage.getItem(STORAGE_KEY)

    if (!savedFavorites) {
      return []
    }

    try {
      return JSON.parse(savedFavorites)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (imdbID: string) => {
    return favorites.some((movie) => movie.imdbID === imdbID)
  }

  const toggleFavorite = (movie: Movie) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.imdbID === movie.imdbID
      )

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.imdbID !== movie.imdbID
        )
      }

      return [...currentFavorites, movie]
    })
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  }
}

export default useFavorites