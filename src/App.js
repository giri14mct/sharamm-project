import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [inputDisplayer, setInputDisplayer] = useState([])
  let inputUpdater = (e) => {
    setInput(e.target.value)
  }
  let updateContent = () => {
    setInputDisplayer(prev => [...prev, input])
    setInput('')
  }
  console.log(inputDisplayer)
  return (
    <>
      <input type="text" value={input} onChange={inputUpdater} />
      <button onClick={updateContent}>Click</button>
      {inputDisplayer.map((data, id) => {
        return <p key={id}> {data}</p>
      })}

    </>
  )
}
export default App;