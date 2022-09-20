import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from '../../hooks/useRegister';

export default function Register() {
    const {registerUsers, errors, isLoading} = useRegister()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [officeName, setOfficeName, ] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        registerUsers(email, password, firstName, lastName,  officeName)
       
    }
  return (
    <div className='px-6 lg:flex justify-center'>
        <div className='mt-20 lg:mt-7 lg:max-w-md p-10 container md:px-56 lg:px-20  rounded-lg border border-gray-200 shadow-md '>
            <h3 className='text-center text-3xl font-sec underline underline-offset-4'>Register</h3><br/>
            <form>
                <div>
                    <label>Email</label><br />
                    <input type="text" className='my-1 border-2 rounded-md focus:outline-pry w-64'
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"  /><br/>
                </div><br />
                <div>
                    <label>Password</label><br />
                    <input type="password" className='my-1 border-2 rounded-md focus:outline-pry w-64'
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div><br />
                <div>
                    <label>First Name</label><br />
                    <input type="text" className='my-1 border-2 rounded-md focus:outline-pry w-64'
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your password" />
                </div><br />
                <div>
                    <label>Last Name</label><br />
                    <input type="text" className='my-1 border-2 rounded-md focus:outline-pry w-64'
                    value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your password" />
                </div><br />
                <div>
                    <label>Office Name</label><br />
                    <input type="text" className='my-1 border-2 rounded-md focus:outline-pry w-64'
                    value={officeName} onChange={(e) => setOfficeName(e.target.value)} placeholder="Enter your password" />
                </div><br />

                {errors && <p className='text-sm text-red-600 text-center mt-5'>{errors}</p>}

                <input className={isLoading ?  'bg-purple-200 my-6 lg:my-1 mx-24 py-2 px-5 text-white rounded-2xl' : 'bg-pry my-6 mx-24 lg:my-1 py-2 px-5 text-white rounded-2xl'} type="submit" onClick={handleRegister} disabled={isLoading} />
                <p className='text-center'>Already Registered? <Link to="/" className="text-pry">Login here</Link></p>
            </form>
        </div>
    </div>
  )
}
