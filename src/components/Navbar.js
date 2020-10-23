import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} style={{ width: '70px' }} alt='logo' />
        </Link>
        <div className='nav-item dropdown'>
          <Link
            className='nav-link dropdown-toggle'
            data-toggle='dropdown'
            to='/'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
            style={({ textDecoration: 'none' }, { color: 'black' })}>
            STAR WARS UNIVERSE
          </Link>
          <div className='dropdown-menu'>
            <a
              className='dropdown-item'
              rel='noreferrer'
              href='https://www.starwars.com/'
              target='_blank'>
              Official Page
            </a>
            <a
              className='dropdown-item'
              href='https://disneylatino.com/shop/co/starwars'
              target='_blank'
              rel='noreferrer'>
              Disney
            </a>
            <a
              className='dropdown-item'
              href='http://tiendalego.com.co/collections/star-wars'
              target='_blank'
              rel='noreferrer'>
              Lego
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
