import React from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'Password'
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  },

]

export default function form3() {

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: ''
      }
    })
  )

  const [response, setResponse] = React.useState(null)


  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(response => { setResponse(response) })
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit} >
      {formFields.map(({ id, label, type }) =>
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type={type}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      )}
      {response && response.ok && <p>Formulário enviado com sucesso!</p>}
      <button>Enviar</button>
    </form>
  )
}

