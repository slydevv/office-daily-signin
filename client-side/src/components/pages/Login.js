import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLoading, errors} = useLogin()
    

    const handleLogin = async (e) => {
        e.preventDefault();
        
        login(email, password)
    }
    
  return (
    <div className='px-6 lg:flex justify-center'>
        <div className='mt-20 p-10 md:px-52 lg:max-w-md lg:px-20 container rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <h3 className='text-center text-3xl font-sec underline underline-offset-4'>Login</h3><br/>
            <form className=''>
                <div>
                    <label>Email</label><br /> 
                    <input type="text " className=' my-1 border-2 rounded-md focus:outline-pry w-72 '
                     value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"  /><br/>
                </div><br/>
                <div>
                    <label>Password</label><br />
                    <input type="password" className='my-1 border-2 rounded-md focus:outline-pry w-72'
                     value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                {errors && <p className='text-sm text-red-600 text-center mt-5'>{errors}</p>}<br/>
                <input className={isLoading ?  'bg-purple-200 my-6 mx-24 py-2 px-5 text-white rounded-2xl border border-none' : 'bg-pry  my-6 mx-24 py-2 px-5 text-white rounded-2xl'} disabled={isLoading} type="submit" onClick={handleLogin} />

                <p className='text-center'>New User? <Link to='/register' className='text-pry'> Register Here</Link></p><br/>
                <p className='text-xs text-green-500'>*Use test@test.com and test2345 if you don't want to register </p>
            </form>
           
        </div>
    </div>
  )
}
