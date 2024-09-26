// import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAuth } from '../../context/authContext'
const Navbar = () => {
    const { user } = useAuth()
    return (
        <div className='flex justify-between h-20 bg-teal-600 text-white items-center px-5'>
            <p className='text-2xl text-center font-pacific'>Bienvenue {user.name}</p>
            <button className='h-12 items-center flex px-6 py-1 bg-teal-500 rounded font-pacific hover:bg-teal-800'>
                <FaSignOutAlt /> 
                <span>Deconnexion</span>
            </button>
        </div>
    )
}

export default Navbar