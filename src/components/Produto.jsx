import React from 'react'

function Produto({nome, propriedades}) {
  return (
    <div>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade, index) => 
        <li key={index}>
          {propriedade}
        </li>)
        }
      </ul>
    </div>
  )
}

export default Produto