// import React from 'react'

import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const AjoutDepartement = () => {
    const [departement, setDepartement] = useState({
        nom_dpmt: '',
        description: ''
    })
    const navigate  = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setDepartement({...departement, [name]: value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/departement/ajout', departement, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                alert("Département ajouté avec succès !");
                setDepartement({ nom_dpmt: '', description: '' });
                navigate('/admin-dashboard/departements');
            }
        } catch (err) {
            if (err.response) {
                console.log("Erreur:", err.response.data);  // Affiche l'erreur retournée par le serveur
            } else {
                console.log("Erreur sans réponse du serveur:", err);
            }
        }
    };    
    
    return (
        <div className='p-5'>
            <h3 className="text-2xl font-bold font-pacific text-center md-6">Ajout d&apos;un département</h3>
            <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-100">
                <form onSubmit={handleSubmit}>
                    <div className="py-3">
                        <label  className="text-sm font-medium text-gray-700"  htmlFor="nom_dpmt">Nom du département</label>
                        <input onChange={handleChange} name="nom_dpmt" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du département" />
                    </div>
                    <div className="py-3">
                        <label className="text-sm font-medium text-gray-700" htmlFor="description">Description </label>
                        <textarea onChange={handleChange} name="description" className="mt-1 w-full p-2 border border-gray-300 rounded-md" placeholder="Description du département"></textarea>
                    </div>
                    <div className="py-3">
                        <button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-md"
                         type="submit">Ajouter un département</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AjoutDepartement