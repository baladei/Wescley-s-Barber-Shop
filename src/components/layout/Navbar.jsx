import { Link } from 'react-router-dom'

import { Container } from './Container'

import logo from '../img/Barber.png'

import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Container>
        <Link to='/'>
          <img src={logo} alt="Wescley's" />
        </Link>        
        <ul className='list'>
          <li className='item'>
          <Link to='/'>Home</Link>
          </li>
          <li className='item'>
          <Link to='/jobs'>Trabalhos</Link>
          </li>
          <li className='item'>
          <Link to='/diary'>Agendamentos</Link>
          </li>
          <li className='item'>
          <Link to='/company'>Empresa</Link>
          </li>
          <li className='item'>
          <Link to='/contact'>Contato</Link>
          </li>
        </ul>

      </Container>
      
    </nav>
  )
}