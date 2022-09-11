import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    // const [isLoading, setIsLoading] = useState('')

    const registerUsers = async (email, password, firstName, lastName,  officeName) => {
        axios.post('api/auth/register', {email, password, firstName, lastName, officeName}).then((res) => {
           if(res){
            navigate('/')
           }
        }).catch((err) => {
            setError(err.message)
        })
    }
    return {registerUsers, error}
}