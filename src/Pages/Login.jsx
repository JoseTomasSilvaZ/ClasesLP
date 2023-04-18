import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePreference } from '../store/slices/user/userSlice'
import { UserContext } from '../Context/Context'

const Login = () => {
    const selectValues = ['Perros', 'Gatos', 'Monos']
    const dispatch = useDispatch()
    const handleSelectChange = (e) => {
        dispatch(changePreference(e.target.value))
    }
    const fruits = ['🍌', '🍎', '🥥', '🍦']

    const {fruit, setFruit} = useContext(UserContext)

    const [phrase, setPhrase] = useState('')

    const handlePhraseChange = (event) => {
      setPhrase(event.target.value)
    }
  return (
    <div>
        <h3>Super Login de gatitos</h3>
        <select onChange={(event) => handleSelectChange(event)}>
            {selectValues.map(selectValue => <option value={selectValue} key={selectValue} name={selectValue}>{selectValue}</option>)}
        </select>
        <Link to='/home'>
        <span>Go to home</span>
        </Link>
        <hr/>
        <h3>Mi fruta favorita es: {fruit}</h3>
        <div>
          {fruits.map(fruit => <button key={fruit} onClick={() => setFruit(fruit)}>{fruit}</button>)}
        </div>
        <h3>{phrase}</h3>
        <input name='phrase' onChange={(event) => handlePhraseChange(event)}/>
        
        
        
    </div>
  )
}

export default Login