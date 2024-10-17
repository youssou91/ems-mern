// import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthProvider'; // Assurez-vous que le chemin est correct

const Navbar = () => {
    const { user } = useAuth(); // Utilisez le hook pour accéder au contexte

    return (
        <div className='flex justify-between h-20 bg-teal-600 text-white items-center px-5'>
            <p className='text-2xl text-center font-pacific'>Bienvenue {user?.name || "Invité"}</p>
            <button className='h-12 items-center flex px-6 py-1 bg-teal-500 rounded font-pacific hover:bg-teal-800'>
                <FaSignOutAlt /> 
                <span>Deconnexion</span>
            </button>
        </div>
    );
}

export default Navbar;
