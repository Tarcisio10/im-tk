import React from 'react';
import { Container, Titulo, Titulo2 } from './styles/styles';

function Home() {
  return (
    <Container>
      <div>
        <Titulo>Hello world vermelho</Titulo>
        <h1>Hello world preto</h1>
        <h2>preto</h2>
        <Titulo2>
          <h2>aqui é azul</h2>
        </Titulo2>
        <Titulo2>aqui é azul menor</Titulo2>
        <Titulo>
          <center>Bem-vindo</center>
        </Titulo>
      </div>
    </Container>
  );
}

export default Home;
