import './Home.css'

import Imagem from '../img/Barber.png'

function Home() {

  return (
    <div className="home">
      <h1>Bem vindo ao <span>Wescley's Barber Shop</span></h1>
      <p>Conheça agora nosso trabalho e agende o seu horário!</p>
      <img src={Imagem} alt="Wescley's Barber Shop" className='imagem'/>
    </div>
  )
}

export default Home
