import React from 'react'

export default function radio() {

  const [produto, setProduto] = React.useState('')

  function handleChange({ target }) {
    setProduto(target.value)
  }

  return (
    <form>
      <label>
        <input type="radio" value="smartphone" onChange={handleChange} checked={produto === "smartphone"}>
          Smartphone
        </input>
      </label>
      <label>
        <input type="radio" value="notebook" onChange={handleChange} checked={produto === "notebook"}>
          Notebook
        </input>
      </label>
    </form>
  )
}

