import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fotos from '../componentes/Fotos'
import Banner from '../componentes/Banner'
import '../App.css'
import Titulo from '../componentes/Titulo'
import Regulamentar from '../componentes/Regulamentar';

function Home() {
  const irPara = useNavigate();
  const hadleclick = () => {
    irPara('/sobre')
  }
  return (

    <div className='app'>
      <Titulo name='Calopsitas e suas curiosidades' />
      <Fotos />
      <button onClick={hadleclick}>
        Saiba mais
      </button>
      <Banner />
      <Regulamentar/>
    </div>
  )
}

export default Home
