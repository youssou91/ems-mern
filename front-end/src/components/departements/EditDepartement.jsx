import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const EditDepartement = () => {
    const { id } = useParams();
    const [departement, setDepartement] = useState(null); // Initialiser avec `null`
    const [loadingDepartement, setLoadingDepartement] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDepartement = async () => {
            setLoadingDepartement(true);
            try {
                const response = await axios.get(`http://localhost:5000/api/departement/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    setDepartement(response.data.departements);
                    // navigate('/admin-dashboard/departements');
                }
                console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingDepartement(false); // Arrêter le chargement
            }
        };
        fetchDepartement();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartement({ ...departement, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/departement/${id}`, departement, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                console.log("Département modifié avec succès");
               navigate('/admin-dashboard/departements');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {loadingDepartement ? (
                <div>Loading...</div>
            ) : (
                <div className='p-5'>
                    <h3 className="text-2xl font-bold font-pacific text-center md-6">Modification d&apos;un département</h3>
                    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-100">
                        <form onSubmit={handleSubmit}>
                            <div className="py-4">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt">Nom du département</label>
                                <input value={departement.nom_dpmt || ''} onChange={handleChange} name="nom_dpmt" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du département" />
                            </div>
                            <div className="py-4">
                                <label className="text-sm font-medium text-gray-700" htmlFor="description">Description </label>
                                <textarea value={departement.description || ''} onChange={handleChange} name="description" className="mt-1 w-full p-2 border border-gray-300 rounded-md" placeholder="Description du département"></textarea>
                            </div>
                            <div className="py-4">
                                <button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 rounded-md" type="submit">
                                    Ajouter un département
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditDepartement;
