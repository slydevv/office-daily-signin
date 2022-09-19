import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState('')
    // const [isLoading, setIsLoading] = useState('')

    const registerUsers = async (email, password, firstName, lastName,  officeName) => {
        setIsLoading(true)
        axios.post('api/auth/register', {email, password, firstName, lastName, officeName}).then((res) => {
           if(res){
            navigate('/')
           }
        }).catch((err) => {
            setIsLoading(false)
            setErrors(err.response.data.error)
        })
    }
    return {registerUsers, errors, isLoading}
}