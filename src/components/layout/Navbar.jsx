import { Link } from 'react-router-dom'

import { Container } from './Container'

import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Container>
  
        
        <ul className='list'>
          <li className='item'>
          <Link to='/'>Home</Link>
          </li>
          <li className='item'>
          <Link to='/projects'>Projetos</Link>
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