import { useState } from 'react'
import Fotos from './componentes/Fotos'
import Header from './componentes/header'
import Banner from './componentes/Banner'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
  <Header/>
      <section>
        <Fotos/>
      </section>
      <section>
        <h2>
          Sobre:
        </h2>
        <p>
        A Calopsita é a principal ave doméstica e muito popular por serem extremamente dóceis, inteligentes e fáceis de cuidar. Sua origem é australiana, tendo sua primeira descrição científica registrada em 1792. Mas foi em 1838 que John Gould, um ornitólogo inglês, viajou para a Austrália a fim de estudar a fauna da região.
        </p>
        <Banner/>
      </section>

    </div>



  )
}

export default App
