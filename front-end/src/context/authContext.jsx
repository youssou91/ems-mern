import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const userContext = React.createContext()

const authContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        const verifyUser = async ()=>{
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    const response = await axios.get('http://localhost:5000/api/auth/verify', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    
                    if (response.data.success) {
                        setUser(response.data.user)
                    }
                }else{
                    localStorage.removeItem("token")
                    navigate('/login')
                }
            } catch (error) {
                if (error.response && !error.response.data.error) {
                   navigate('/login')
               }
            }
        }
        verifyUser()
    },[])
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
    return (
        <userContext.Provider value={{ user, login, logout }}>
            {children}
        </userContext.Provider>
    )
}
export const useAuth = ()=>useContext(userContext)
export default authContext