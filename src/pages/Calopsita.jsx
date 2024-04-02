import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fotos from '../componentes/Fotos'
import Banner from '../componentes/Banner'
import '../App.css'
import Titulo from '../componentes/Titulo'

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
    </div>
  )
}

export default Home
