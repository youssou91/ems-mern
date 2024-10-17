/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
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
                }
            }
            setLoading(false);
        };

        verifyUser();
    }, []);

    const login = (user) => {
        setUser(user);
        localStorage.setItem('token', user.token); // Assurez-vous que vous avez le token ici
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook pour accéder au contexte
export const useAuth = () => useContext(UserContext);
export default AuthProvider; // Export par défaut du composant
