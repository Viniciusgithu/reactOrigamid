import React from 'react'
import Titulo from './Titulo'

function Home({dados}) {
  return (
    <section>
      <Titulo texto="Home / Sobre os produtos"/>
      <p>Produto: {dados.nome}</p>
      <p>Preço: {dados.preco}</p>
      <p>Imagem: 
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
      </p>
    </section>
  )
}

export default Home