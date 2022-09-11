import { useAuthHook } from "./useAuthHook";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthHook()
    const navigate = useNavigate() 
    
    const login = (email, password) => {
        setIsLoading(true)
        axios.post('api/auth/login', {email, password}).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({type:'LOGIN', payload:res.data})
            navigate('/dashboard')
        }).catch((err) => {
            setIsLoading(false)
            setError(err.message)
           
        })
    }
    return {login, error, isLoading}
}