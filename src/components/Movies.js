import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

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
  const { id } = useParams()
  console.log('TLC: Movies -> id', id)
  const { loading, error, data } = useQuery(GET_MOVIES)
  if (loading) return <p>loading Messages...</p>
  if (error) {
    return <p>Error</p>
  }

  const movie = data.allFilms.films.filter((film) => {
    return film.id === id
  })

  return (
    <div className='row justify-content-center'>
      <div className='col-md-10 '>
        {movie.map(({ id, title, openingCrawl, director, planetConnection }) => (
          <div key={id} className='card m-2'>
            <div className='card-body'>
              <h2 key={title}>{title}</h2>
              <h6 key={director}>{director}</h6>
              <p key={openingCrawl}>{openingCrawl}</p>
              <div className='dropdown-divider'></div>
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
