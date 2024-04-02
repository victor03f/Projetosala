
import React from 'react';
import Descricao from '../componentes/Descrição';
import { useNavigate } from 'react-router-dom';
function Sobre() { useNavigate
  const irPara= useNavigate();
  const handleClick = () => {
    irPara('/');
  };
  return (
    <div className='sobre'>
      {}
  
      <Descricao /> 
      {}
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
export default Sobre;

