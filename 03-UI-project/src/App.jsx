import React, { useState } from 'react'

const App = () => {

const [state, setstate] = useState(10)
function increase(){

  setstate(state * 2)
}

function decrease(){

  setstate(state - 1)
}

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App
