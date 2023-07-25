
import React from 'react'

export default function textarea() {

  const [textarea, setTextarea] = React.useState('')

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
    </form>
  )
}

