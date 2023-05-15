import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';

import './NewJob.css'

export const NewJob = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (

    <div className='diary'>
        <span className='info'>Escolhe um dia e um horário de sua preferência:
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar className='calendar'/>
        </LocalizationProvider>
        </span>

    <div>
      <form action="">

        <fieldset className="form">

        <legend>Preencha seus dados:</legend>

        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Digite seu nome completo"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus />

        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
          value={email} />

        <label htmlFor="message">Mensagem</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Digite aqui a sua mensagem" 
          cols="30"
          rows="10"
          onChange={(e) => setMessage(e.target.value)}
          value={message} />

        <button type="submit">Enviar</button>

        </fieldset>
      </form>
    </div>
    </div>
  );
}