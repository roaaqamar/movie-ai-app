import { useEffect, useState } from 'react'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore'

import { db } from '../firebase'
import { useAuth } from '../contexts/useAuth'
import type { Movie } from '../types/movie'

function useFavorites() {
  const { user } = useAuth()

  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    if (!user) {
      return
    }

    const favoritesRef = collection(
      db,
      'users',
      user.uid,
      'favorites'
    )

    const unsubscribe = onSnapshot(
      favoritesRef,
      (snapshot) => {
        const movies = snapshot.docs.map(
          (favoriteDoc) =>
            favoriteDoc.data() as Movie
        )

        setFavorites(movies)
      },
      (error) => {
        console.error(
          'Error loading favorites:',
          error
        )

        setFavorites([])
      }
    )

    return unsubscribe
  }, [user])

  const isFavorite = (imdbID: string) => {
    return favorites.some(
      (movie) => movie.imdbID === imdbID
    )
  }

  const toggleFavorite = async (movie: Movie) => {
    if (!user) {
      console.warn(
        'You must be logged in to use favorites.'
      )
      return
    }

    const favoriteRef = doc(
      db,
      'users',
      user.uid,
      'favorites',
      movie.imdbID
    )

    try {
      if (isFavorite(movie.imdbID)) {
        await deleteDoc(favoriteRef)
      } else {
        await setDoc(favoriteRef, movie)
      }
    } catch (error: unknown) {
      console.error(
        'Error updating favorite:',
        error
      )
    }
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  }
}

export default useFavorites