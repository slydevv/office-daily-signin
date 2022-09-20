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
    <div className='bg-gray-100  rounded-br-lg rounded-bl-lg border border-gray-200 shadow-md '>
        <div className={user ?'flex px-4 md:px-14 py-3' : ' px-4 py-3 '}>          
            <h3 className={user ? 'text-xl font-bold w-44' : 'text-center text-xl font-bold '}>Silver <span className='text-pry'>Tech</span> Hub</h3> 
          
            <div className='pl-16 md:pl-72 lg:pl-[880px]'> {user ? <button className='bg-aux  py-1 px-4 text-white rounded-2xl' onClick={handleLogout}>Log out</button> :
            <></>} </div>
         </div>
    </div>
  )
}
