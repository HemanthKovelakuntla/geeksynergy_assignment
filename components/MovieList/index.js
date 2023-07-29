import React, {useEffect, useState} from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'
import './index.css'

const MovieList = () => {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.post('https://hoblist.com/api/movieList', {
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        })
        setMovieData(response.data.result)
      } catch (error) {
        console.error('Error fetching movie data:', error)
      }
    }

    fetchMovieData()
  }, [])

  return (
    <div className="movie-list-container">
      <h2>Movie List</h2>
      <ul>
        {movieData.map(movie => (
          <li key={movie.movie}>{movie.movie}</li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
