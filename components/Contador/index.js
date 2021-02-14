import React, { useState } from 'react';

// import { Container } from './styles';

function Contador() {
  const [contador, setContador] = useState(1);

  function addContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={addContador}>Adicionar</button>
    </div>
  );
}

export default Contador;
