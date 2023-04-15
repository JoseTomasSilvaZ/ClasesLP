import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recordatorio from './components/Recordatorio/Recordatorio'

function App() {
  const saludo = 'Hola que tal, me gustan los gatitos' // <- esto es JS puro
  const [contador, setContador] = useState(0)
  const [error, setError] = useState(null) 

  useEffect(() => {
    if(contador === 5) {
      console.log('Por el culo te la hinco')
      return setError('Te la metieron rico')
    }
    if(contador === 8) {
      return setError('Tu culo en mi bizcocho')
    }
    return setError(null)
  }, [contador])

  
  return (
    <div className="App">
      {error ? error : ''}
      <h3>contador: {contador}</h3>
      <button onClick = {() => setContador(contador - 1)}>Clickeame para restar el contador!!</button>
      <button onClick = {() => setContador(contador + 1)}>Clickeame para aumentar el contador!!</button>
     <hr/>

    {contador % 2 === 0 ? 
    <Recordatorio saludo = {saludo} contador={contador}/>
      :
    'El numero es impar!'}
    </div>
 

   
  )
}

export default App
