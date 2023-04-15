import React, { useEffect, useState } from 'react'

const Clase2 = () => {
    const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'
    const [kittens, setKittens] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchKittens = async() => {

        try {
            const response = await fetch(URL) 
            const result =  await response.json()
            console.log(result)
            setKittens(result)
        
        } catch(error) {
            setError(true)
      
        } finally {
           setLoading(false) 
        }
     

    }
    useEffect(() => {
        fetchKittens()
    }, [])

  return (
    <div>
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

export default Clase2