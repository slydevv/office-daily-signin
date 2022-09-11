import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLoading} = useLogin()
    

    const handleLogin = async (e) => {
        e.preventDefault();
        
        login(email, password)
    }
    
  return (
    <div>
        <div className='mt-20 p-10'>
            <form>
                <div>
                    <label>Email</label><br />
                    <input type="text" className=' my-1 border-2 rounded-md focus:outline-pry w-72'
                     value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"  /><br/>
                </div><br/>
                <div>
                    <label>Password</label><br />
                    <input type="password" className='my-1 border-2 rounded-md focus:outline-pry w-72'
                     value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <input className={isLoading ?  'bg-purple-200 my-6 mx-24 py-2 px-5 text-white rounded-2xl' : 'bg-pry my-6 mx-24 py-2 px-5 text-white rounded-2xl'} disabled={isLoading} type="submit" onClick={handleLogin} />

                <p className='text-center'>New User? <Link to='/register' className='text-pry'> Register Here</Link></p>
            </form>
           
        </div>
    </div>
  )
}
