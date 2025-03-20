import { useState } from 'react'
import './App.css'
import Estudiante from './components/estudiante'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const save = () => {
    console.log('Elemento guardado')
  }
  const deleteElemnt = () => {
    console.log('Elemento eliminado')
  }

  let bottonProps = {
    color: 'green',
    text: 'save',
    onClick: save
  }

  return (
    <>
      <h1>Hola Mundo</h1>
      <Estudiante name="Charles" status="pendiente"/>

      <Button color={bottonProps.color} text={bottonProps.text} onClick={save}/>
      <Button color="red" text="Delete" onClick={deleteElemnt}/>
    </>
  )
}

export default App
