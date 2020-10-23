import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Link } from 'react-router-dom'

const GET_NAMES = gql`
  {
    allPeople {
      people {
        id
        name
        filmConnection {
          films {
            id
            title
          }
        }
      }
    }
  }
`

const NameList = () => {
  const { loading, error, data } = useQuery(GET_NAMES)
  if (loading) return <p>loading Messages...</p>
  if (error) {
    return <p>Error</p>
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-10 '>
        {data.allPeople.people.map(({ id, name, filmConnection }) => (
          <div key={id} className='card m-2'>
            <div className='card-body'>
              <h3>{name}</h3>
            </div>
            <div className='accordion' id='accordionExample'>
              <div className='card'>
                <div className='card-header' id='headingOne'>
                  <h2 className='mb-0'>
                    <button
                      className='btn font-weight-bold btn-block text-left'
                      type='button'
                      data-toggle='collapse'
                      data-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'>
                      Movies
                    </button>
                  </h2>
                </div>
                <div
                  id='collapseOne'
                  className='collapse show'
                  aria-labelledby='headingOne'
                  data-parent='#accordionExample'>
                  <div className='card-body'>
                    <ul>
                      {filmConnection.films.map(({ id, title }) => (
                        <Link to={`/${id}`}>
                          <li key={id}>{title}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NameList
