import  { useState } from 'react'

import { useAuthHook } from "../../hooks/useAuthHook";

export default function Dashboard() {
    const {dispatch, user} = useAuthHook()
    
    const [signInTime, setSignInTime] = useState('')
    const [signOutTime, setSignOutTime] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)

    // get present date
   const findDate = new Date().toString()
   const splitOutDate = findDate.split("2022")
   let dateToday = splitOutDate[0]

   

    const dailySignIn = () => {
      const inTime = new Date().toLocaleTimeString();
      setSignInTime(inTime)
      setSignOutTime('')
      setIsSignedIn(true)
      

    }
    const dailySignOut = () => {
        const inTime = new Date().toLocaleTimeString();
        setSignOutTime(inTime)
        setSignInTime('')
        setIsSignedIn(false)
    }
  return (
    <div className='container mx-auto px-24'>
        <h6 className='text-3xl text-center'>Hi {user && user.officeName} </h6>
       
        <div>
            <h3 className='pl-4'>{dateToday}, 2022</h3>
            {isSignedIn ? <div>
                    <button className='bg-sec my-6  py-2 px-5 text-white rounded-2xl' onClick={dailySignOut}>Sign out for the day</button>
                </div>: <button className='bg-pry my-6  py-2 px-5 text-white rounded-2xl' onClick={dailySignIn}>Daily Sign In</button>}
            
            {signInTime && <div>
                <h4>welcome to office {user && user.officeName}</h4>
                <h6>You signed In at: <span>{signInTime}</span></h6>
                </div>}

                {signOutTime && <div>
                    <h4>Hope you had a nice day</h4>
                    <h5>You signed out at: <span>{signOutTime}</span></h5>
                    </div>}
               
        </div>
    </div>
  )
}
