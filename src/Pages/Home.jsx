import React, { useContext } from 'react'
import Clase2 from '../components/Clases/Clase2'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserContext } from '../Context/Context'

const Home = () => {
    const kittenButtons = [1,2,3,4]
    const {preference} = useSelector(state => state.user)
    const {fruit} = useContext(UserContext)
  return (
    <div>
        <h3>Hmm, parece que te gustan los {preference}</h3>
        <Clase2/>
        <div style={{display:'flex', flexDirection:'column', gap:5}}>
            {kittenButtons.map(kittenButton => <Link to={`/home/${kittenButton}`}>Ver {kittenButton} gatitos</Link>)}
        </div>
        <hr/>
        {
          fruit === '🍦' ? 
          <h3>Weon, elige una fruta</h3>
          :
          <h3>WOW, tu fruta favorita es : {fruit}</h3>
        }

    </div>
  )
}

export default Home