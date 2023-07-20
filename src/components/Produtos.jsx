import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] 
    },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] 
    },
  ];
  

  return (
    <>
      <Titulo texto="Produtos"/>
      {produtos.map((itens) => 
        <Produto key={itens.nome} {...itens}></Produto>
      )}
    </>
  )
}

export default Produtos