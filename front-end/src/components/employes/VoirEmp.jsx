import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VoirEmp = () => {
    const { employeId } = useParams();
    const [employe, setEmploye] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmploye = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/employees/${employeId}`);
                setEmploye(response.data.employe);
                setLoading(true);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Erreur lors de la récupération des données de l\'employé.');
                setLoading(false);
            }
        };
        if (employeId) {
            fetchEmploye();
        }
    }, [employeId]);

    if (loading) return <p>Chargement... </p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-8">Détails employé</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <img className="rounded-full border w-72" src={`http://localhost:5000/${employe?.userId?.profileImage}`} alt="Profil" />
                </div>
                <div className="">
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Nom:</p>
                        <p className="font-medium">{employe?.userId?.nom}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Prénom:</p>
                        <p className="font-medium">{employe?.userId?.prenom}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Email:</p>
                        <p className="font-medium">{employe?.userId?.email}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Date de naissance:</p>
                        <p className="font-medium">{new Date(employe?.userId?.dateDeNaissance).toLocaleDateString()}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Salaire:</p>
                        <p className="font-medium">{employe?.salaire} ���</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Département:</p>
                        <p className="font-medium">{employe?.departement?.nom}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold">Statut:</p>
                        <p className="font-medium">{employe?.statut}</p>
                    </div>
                </div>
               
            </div>
            <hr />
                <div className='flex space-x-3 mb-5'> 
                    <p className="text-lg font-bold">Date entrée:</p> 
                    <p className="font-medium">{new Date(employe?.dateEntree).toLocaleDateString()}</p> <hr/>
                    <p className="text-lg font-bold">Date sortie:</p> 
                    <p className="font-medium">{employe?.dateSortie ? new Date(employe?.dateSortie).toLocaleDateString() : 'Non renseignée'}</p><hr/>
                    <p className="text-lg font-bold">Contrat:</p> 
                    <p className="font-medium">{employe?.contrat?.nom}</p> <hr/>
                    <p className="text-lg font-bold">Role:</p>
                    <p className="font-medium">{employe?.role?.nom}</p> <hr/>
                </div>
        </div>
    );
};

export default VoirEmp;
