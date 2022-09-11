import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthHook } from "../../hooks/useAuthHook";


export default function Navbar() {
    const navigate = useNavigate();
    const {dispatch, user} = useAuthHook() 
    const handleLogout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }
  return (
    <div>
        <div>
            <p>silver tech hub</p>
            <ul>
                <li className='right'>log out</li>
            </ul>
        {/* <span>log out</span>
        <p className='text-xl '>Silver <span className='text-pry'>Tech</span> Hub</p> */}
       
       {/* {user ? <button className='bg-aux  py-2 px-4 text-white rounded-2xl' onClick={handleLogout}>Log out</button> : <>.</>} */}
       </div>
    </div>
  )
}
