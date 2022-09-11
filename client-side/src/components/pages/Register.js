import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from '../../hooks/useRegister';

export default function Register() {
    const {registerUsers} = useRegister()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [officeName, setOfficeName] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        registerUsers(email, password, firstName, lastName,  officeName)
       
    }
  return (
    <div>
        <div className='mt-8 mx-16'>
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
                <input className='bg-pry py-2 px-6 my-3 mx-20 text-white rounded-2xl' type="submit" onClick={handleRegister} />
                <p className='text-center'>Already Registered? <Link to="/" className="text-pry">Login here</Link></p>
            </form>
        </div>
    </div>
  )
}
