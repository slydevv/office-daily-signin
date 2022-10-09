import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Staff() {
    const[staffNames, setStaffNames] = useState('')
    const[query, setQuery] = useState('')

    useEffect(() => {
        const getStaff  = async () => {
          await  axios.get('https://randommer.io/api/Name?nameType=fullname&quantity=30',
            {headers: {"X-Api-Key": "b61541e7b3804d129978024acdd93c2c"}}).then((res) => {
                
                setStaffNames(res.data)  
              
            }).catch((err) => {
                console.log(err)
            })
        }
        getStaff()
    },[])
  return (
    <div>
        <h1 className='text-2xl text-center py-8'>This is staff page</h1>
        <div className='my-4 mx-12'>
            <label>Search</label><br />
            <input type='text' placeholder="Search our Staff list" onChange={(e => {setQuery(e.target.value)})}
            className=' border-2 rounded-md focus:outline-pry w-60 md:w-72' />
        </div>
        
        {
            staffNames && staffNames.filter(staff => {
                if(query === ''){
                    return staff;
                }else if(staff.toLowerCase().includes(query.toLowerCase())){
                    return staff
                }
               
            }).map((staff, index) => (
            <p key={index}>{staff}</p>
        )) }
    </div>
  )
}
