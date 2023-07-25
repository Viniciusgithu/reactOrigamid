import React from 'react'

export default function checked() {

  const [cor, setCor] = React.useState([])

  function handleChange({ target }) {
    if (target.checked) {
      setCor([...cor, target.value])
    } else {
      setCor(cor.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={cor.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cor.includes("vermelho")}
          onChange={handleChange}
        />
        Azul
      </label>
    </form>
  )
}

