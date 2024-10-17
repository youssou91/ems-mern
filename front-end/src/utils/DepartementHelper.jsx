/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const colums = [
    {
        name: 'S No',
        selector: (row) => row.sno
    },
    {
        name: 'Nom Departement',
        selector: (row) => row.nom_dpmt,
        sortable: true
    },
    {
        name: 'Actions',
        selector: (row) => row.action
    }
];

export const DepartementButtons = ({ _id, onDeleteDepartement}) => {
    const navigate = useNavigate()
    const handleDelete = async (_id) => {
        if (window.confirm('Etes-vous sur de vouloir supprimer ce département?')) {
            try {
                const response = await axios.delete(`http://localhost:5000/api/departement/${_id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    onDeleteDepartement(_id)
                    navigate('/admin-dashboard/departements')
                    
                }
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <div className="flex justify-between gap-5 ">
            <button onClick={() => navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button onClick={() => handleDelete(_id)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
        </div>
    )
}