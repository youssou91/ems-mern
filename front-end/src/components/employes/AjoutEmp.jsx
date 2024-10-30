// import React from 'react'

import { useEffect, useState } from "react"
import { fetchDepartement } from "../../utils/EmployeHelper";
import axios from "axios";
import { useNavigate } from "react-router-dom"


const AjoutEmp = () => {
    const navigate = useNavigate();
    const [departements, setDepartements] = useState([])
    const [formData, setFormData] = useState({})
    useEffect(() => {
        const getDepartement = async () => {
            const departements = await fetchDepartement()
            setDepartements(departements)
        }
        getDepartement()
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target; // Utilisez 'files' pour les fichiers
        if (name === 'image') {
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formDataObj = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key])
        })
        console.log('FormData:', formData);
        try {
            const response = await axios.post('http://localhost:5000/api/employes/ajout', formDataObj, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                console.log(formDataObj);

                navigate('/admin-dashboard/employes');
            }
        } catch (err) {
            if (err.response.status && !err.response.data.success) {
                // alert(err.response.data.err);
            }
        }
    }
    return (
        <div className='p-5'>
            <div className='text-center'>
                <h3 className="text-3xl font-bold font-pacific">Ajout d&apos;un employe</h3>
            </div>
            <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-100">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nomEmp">Nom de l&apos;employé</label>
                                <input name="nom" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom de l'employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="prenomEmp">Prénom de l&apos;employé</label>
                                <input name="prenom" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Prénom de l'employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="emailEmp">Email de l&apos;employé</label>
                                <input name="email" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Email de l'employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Date de Naissance de l&apos;employé</label>
                                <input name="dateNaissance" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="date" placeholder="Date de Naissance de l&apos;employé" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_3">Genre de l&apos;employé</label>
                                <select name="sexe" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                                    <option value="" selected>Choisissez un genre</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_3">Statut de l&apos;employé</label>
                                <select name="statut" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                                    <option value="" selected>Choisissez un statut</option>
                                    <option value="Actif">Actif</option>
                                    <option value="Inactif">Inactif</option>
                                    <option value="En congé">En congé</option>
                                    <option value="En formation">En formation</option>

                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_1">Département de l&apos;employé</label>
                                <select name="departement" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                                    <option value="" selected>Choisissez un département</option>
                                    {departements.map(dpmt => (
                                        <option key={dpmt._id} value={dpmt._id}>{dpmt.nom_dpmt}</option>

                                    ))}

                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Designation de l&apos;employé</label>
                                <input name="designation" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Designation de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Salaire de l&apos;employé</label>
                                <input name="salaire" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="number" placeholder="Salaire de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Mot de pass de l&apos;employé</label>
                                <input name="password" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="password" placeholder="***********" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Matricule de l&apos;employé</label>
                                <input name="matricule" onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Matricule de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Photo de l&apos;employé</label>
                                <input name="image" onChange={handleChange} accept="image/*" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="file" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            className="w-full md:w-1/2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 rounded-md"
                            type="submit">
                            Ajouter un employé
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AjoutEmp