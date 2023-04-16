import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Kittens = () => {
  const {number} = useParams()
  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'
  const [kittens, setKittens] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {preference} = useSelector(state => state.user)
  const fetchKittens = async(number) => {

      try {
          const response = await fetch(URL) 
          const result =  await response.json()
          setKittens(result.slice(0, number))
      
      } catch(error) {
          setError(true)
    
      } finally {
         setLoading(false) 
      }
   

  }
  useEffect(() => {
      fetchKittens(number)
  }, [])
  return (
    <div>
        <h2>Te gustan los {preference}</h2>
        <Link to='/home'>Ir atras y ver gatitos hermosos</Link>
        <h3>Quieres ver {number} {number > 1 ? 'gatitos' : 'gatito'}</h3>
        {loading ? 
       <h1>Cargando gatitos 🐈...</h1> 
       :
       <div>
        {error && <h3>Whoops, hubo un error</h3>}
        {!error && kittens.map(kitten => <img key={kitten.id} src={kitten.url}/> )}

       </div>
       }
    </div>
  )
}

export default Kittens