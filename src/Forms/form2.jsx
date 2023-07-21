import React from 'react'

export default function form2() {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }


  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="">Nome</label>
      <input
        id="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <p>
        Nome: {form.nome}
        Email: {form.email}
      </p>

    </form>
  )
}
