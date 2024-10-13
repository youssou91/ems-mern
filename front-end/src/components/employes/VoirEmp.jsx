import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VoirEmp = () => {
    const { id } = useParams()
    const [employe, setEmploye] = useState([])
    // useEffect(() => {
    //     const fetchEmploye = async () => {
    //         // setLoadingDepartement(true);
    //         try {
    //             const response = await axios.get(`http://localhost:5000/api/employe/${id}`, {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             });
    //             console.log(response.data);
    //             if (response.data.success) {
    //                 setEmploye(response.data.employe);
    //             }
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchEmploye();
    // }, [id]);
    useEffect(() => {
        console.log("Employe ID:", id); // Pour vérifier si l'ID est bien récupéré
        const fetchEmploye = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/employe/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setEmploye(response.data.employe);
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (id) {
            fetchEmploye();
        }
    }, [id]);
    
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-3xl font-bold mb-8 font-pacific text-center md-6"> Détails employé </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="">
                    {/* <img className='rounded-full border w-72' 
                        src={`http://localhost:5000/${employe.userId.profileImage}`} alt="" /> */}
                </div>
                <div className="">
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold "> Nom: </p>
                        <p className="font-medium"> test</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold "> Nom: </p>
                        <p className="font-medium"> test</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold "> Nom: </p>
                        <p className="font-medium"> test</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold "> Nom: </p>
                        <p className="font-medium"> test</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className="text-lg font-bold "> Nom: </p>
                        <p className="font-medium"> test</p>
                    </div>

                    {/* <h3 className="font-semibold text-xl mb-4">NOM
                         {employe.nom} 
                    </h3>
                    <p className="text-sm mb-4">Email : 
                        {employe.email}
                        </p>
                    <p className="text-sm mb-4">Téléphone : 
                        {employe.telephone}
                        </p>
                    <p className="text-sm mb-4">Date de naissance : 
                        {employe.date_naiss}
                        </p>
                    <p className="text-sm mb-4">Adresse : 
                        {employe.adresse}
                        </p>
                    <p className="text-sm mb-4">Genre : 
                        {employe.sexe}
                        </p>
                    <p className="text-sm mb-4">Matricule : 
                        {employe.matricule}
                        </p>
                    <p className="text-sm mb-4">Statut : 
                        {employe.statut}
                        </p> */}
                </div>
            </div>
        </div>
    )
}

export default VoirEmp