import  { useState } from 'react'

import { useAuthHook } from "../../hooks/useAuthHook";

export default function Dashboard() {
    const {dispatch, user} = useAuthHook()
    
    const [signInTime, setSignInTime] = useState('')
    const [signOutTime, setSignOutTime] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [activites, setActivites] = useState(false)

    // get present date
   const findDate = new Date().toString()
   const splitOutDate = findDate.split("2022")
   let dateToday = splitOutDate[0]

   

    const dailySignIn = () => {
      const inTime = new Date().toLocaleTimeString();
      setSignInTime(inTime)
      setSignOutTime('')
      setIsSignedIn(true)
      setActivites(true)
      

    }
    const dailySignOut = () => {
        const inTime = new Date().toLocaleTimeString();
        setSignOutTime(inTime)
        setSignInTime('')
        setIsSignedIn(false)
    }
  return (
    <div>
    <div className='container mx-auto px-10 mt-16 font-general'>
        <h6 className='text-3xl text-center'>Hi there, {user && user.officeName}! </h6><br />
       
        <div className='font-sec'>
            <h3 className='text-center'>{dateToday}, 2022</h3>
           <div className='flex justify-center'> 
               {isSignedIn ? 
              
                  <button className='bg-sec my-6  py-2 px-5 text-white rounded-2xl hover:bg-white hover:text-sec hover:border hover:border-sec' onClick={dailySignOut}>Sign out for the day</button>
                :
                
                  <button className='bg-pry my-6 py-2 px-5 text-white rounded-2xl hover:bg-white hover:text-pry hover:border hover:border-pry' onClick={dailySignIn}>Daily Sign In</button>
                }
            </div>
            <div className='md:flex justify-center'> 
            {signInTime && <div className='w-full max-w-sm my-8 px-4 py-7  bg-white rounded-lg border border-gray-200 shadow-md '>
                <h4 className='text-2xl text-center'>Welcome back to office, {user && user.officeName}</h4><br/>
                <h6 className='text-3xl text-center'>You signed In at: <br/>
                <p className='text-center text-3xl font-time'>{signInTime}</p></h6><br/><br/>
                <p className='text-center text-sm text-green-500'>* Please check your task for the week below</p>
                </div>}

                {signOutTime && <div className='w-full max-w-sm my-8 px-4 py-7  bg-white rounded-lg border border-gray-200 shadow-md '>
                    <h4 className='text-2xl text-center' >Hope you had a nice day</h4><br/>
                    <h5 className='text-center text-3xl '>You signed out at: <br/><br/>
                    <span className='text-center text-3xl font-time'>{signOutTime}</span></h5>
                    </div>}
                    </div>
        </div>
    </div>
    <section className={activites ? 'my-10 mb-8 bg-gray-50 md:flex border-gray-200 shadow-md ' : 'hidden'}>
          <div className='mx-auto px-10 py-6'>
          <h4 className='text-2xl text-center font-bold'>Work activites for the week</h4><br/>
          <div className='text-lg'>
            <p><span className='font-bold'>Monday:</span> All pull request should be merged to the main branch</p>
            <p><span className='font-bold'>Tuesday:</span> Sign up functionality should be done</p>
            <p><span className='font-bold'>Wednesday:</span> Official Vist to Microsoft office</p>
            <p><span className='font-bold'>Thursday:</span> Fix all bugs and push to main</p>
            <p><span className='font-bold'>Friday:</span> Final testing and ready for deployment</p>
          </div>
          </div>
        </section>
    </div>
  )
}
