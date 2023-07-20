import React from 'react'
import Titulo from './Titulo'

const Header = () => {
  return (
    <header>
      <Titulo texto="Let's go!"/>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  )
}

export default Header