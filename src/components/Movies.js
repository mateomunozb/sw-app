import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_MOVIES = gql`
  {
    allFilms {
      films {
        id
        title
        openingCrawl
        director
        producers
        planetConnection {
          planets {
            name
          }
        }
      }
    }
  }
`

const Movies = (props) => {
  // const [moviesIn, setMoviesIn] = useState([])
  const { loading, error, data } = useQuery(GET_MOVIES)
  if (loading) return <p>loading Messages...</p>
  if (error) {
    return <p>Error</p>
  }

  // const getMovies = () => {
  //   if (props.match.params.id) {
  //     const movie = data.allFilms.films.filter((film) => {
  //       return film.id === props.match.params.id
  //     })
  //     setMoviesIn(movie)
  //     console.log('TLC: getMovies -> movie', movie)
  //   }
  // }
  // getMovies()

  return (
    <div className='row justify-content-center'>
      <div className='col-md-10 '>
        {data.allFilms.films.map(({ id, title, openingCrawl, director, planetConnection }) => (
          <div key={id} className='card m-2'>
            <div className='card-body'>
              <h2>{title}</h2>
              <h6>{director}</h6>
              <p>{openingCrawl}</p>
              <div class='dropdown-divider'></div>
              <ul>
                {planetConnection.planets.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
