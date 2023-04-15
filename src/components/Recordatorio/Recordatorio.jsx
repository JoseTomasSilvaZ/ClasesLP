import Contador from "../Contador/Contador"

const Recordatorio = ({saludo, contador}) => {
  return (
    <div className='container'>
    <p>{saludo}</p>
    <small>Porque me pongo super triste</small>
    <Contador contador={contador}/>
    </div>
  )
}


export default Recordatorio

