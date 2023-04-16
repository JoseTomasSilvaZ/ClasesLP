import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePreference } from '../store/slices/user/userSlice'

const Login = () => {
    const selectValues = ['Perros', 'Gatos', 'Monos']
    const dispatch = useDispatch()
    const handleSelectChange = (e) => {
        dispatch(changePreference(e.target.value))
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
    </div>
  )
}

export default Login