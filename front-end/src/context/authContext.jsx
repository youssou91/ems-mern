/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import {createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setUser(null);
                    setLoading(false);
                    return; // Ne pas continuer si le token est absent
                }
                
                const response = await axios.get('http://localhost:5000/api/auth/verify', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Erreur lors de la vérification de l'utilisateur:", error?.response?.data);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        
        verifyUser();
    }, []);
    
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
    return (
        <userContext.Provider value={{ user, login, logout, loading}}>
            {children}
        </userContext.Provider>
    )
}
export const useAuth = ()=>useContext(userContext)
export default AuthContext