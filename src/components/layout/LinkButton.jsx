import './LinkButton.css'

import { Link } from 'react-router-dom'

export const LinkButton = ({to, text}) => {
  return (
    
    <Link className='button' to={to}>
        {text}
    </Link>
  )
}
