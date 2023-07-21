import React from 'react'

function form() {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{nome}</p>
      <button>Enviar</button>
    </form>
  )
}

export default form