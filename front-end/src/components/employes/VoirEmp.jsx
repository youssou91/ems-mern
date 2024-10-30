import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VoirEmp = () => {
    const { id } = useParams();
    const [employe, setEmploye] = useState([]);
    useEffect(() => {
        const fetchEmploye = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/employes/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setEmploye(response.data.employe);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    console.log(error.response.data.error);
                }
            }
        };
        fetchEmploye();
    }, [id]);
    return (
        <>{employe ? (
            <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md relative">
                <h2 className="text-3xl font-bold mb-5 text-center">Détails employé</h2>

                {/* Bouton de modification */}
                <button
                    className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                    // eslint-disable-next-line no-undef
                    onClick={() => handleEdit()} // Assure-toi de définir la fonction `handleEdit`
                >
                    Modifier
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-60">
                        <img className="rounded-full border w-42"
                            src={`http://localhost:5000/${employe?.userId?.profileImage}`} alt="Profil" />
                    </div>
                    <div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Nom:</p>
                            <p className="font-medium">{employe?.userId?.nom}</p>
                        </div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Prénom:</p>
                            <p className="font-medium">{employe?.userId?.prenom}</p>
                        </div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Email:</p>
                            <p className="font-medium">{employe?.userId?.email}</p>
                        </div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Date de naissance:</p>
                            <p className="font-medium">
                                {new Date(employe?.dateNaissance).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Salaire:</p>
                            <p className="font-medium">{employe?.salaire} €</p>
                        </div>
                        <div className="flex space-x-3 mb-4">
                            <p className="text-lg font-bold">Matricule:</p>
                            <p className="font-medium">{employe?.employeId}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col mt-2 space-y-3">
                    <h3 className="text-lg font-bold text-center">Informations supplémentaires</h3>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-8 mt-3">
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Département:</p>
                            <p className="font-medium">{employe?.departement?.nom_dpmt}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Poste:</p>
                            <p className="font-medium">{employe?.designation}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Date entrée:</p>
                            <p className="font-medium">
                                {new Date(employe?.userId?.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Date sortie:</p>
                            <p className="font-medium">
                                {employe?.dateSortie ? new Date(employe?.dateSortie).toLocaleDateString() : 'Non renseignée'}
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Statut:</p>
                            <p className="font-medium">{employe?.statut}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Sexe:</p>
                            <p className="font-medium">{employe?.sexe}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Téléphone:</p>
                            <p className="font-medium">{employe?.userId?.telephone}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-lg font-bold">Adresse:</p>
                            <p className="font-medium">{employe?.userId?.adresse}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <p>Chargement...</p>
        )}</>
    );
};

export default VoirEmp;
