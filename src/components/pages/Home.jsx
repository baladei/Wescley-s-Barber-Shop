import './Home.css'

import Imagem from '../../img/Barber.png'
import { LinkButton } from '../layout/LinkButton'

function Home() {

  return (
    <div className="home">
      <h1><p className='welcome'>Bem vindo ao</p><span>Wescley's Barber Shop</span></h1>
      <p>Conheça nosso trabalho e agende agora o seu horário!</p>
      <LinkButton to='/newjob' text='AGENDAR' />
      <img src={Imagem} alt="Wescley's Barber Shop" className='imagem'/>
    </div>
  )
}

export default Home
