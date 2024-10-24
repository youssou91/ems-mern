import axios from "axios";
/* eslint-disable react/prop-types */
import { FaEdit, FaMoneyBillWave, FaMoneyBillWaveAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
export const fetchDepartement = async () => {
    let departements
    try {
        const response = await axios.get('http://localhost:5000/api/departement', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.data.success) {
            departements = response.data.departements
        }
    } catch (error) {
        if (error.response.status && !error.response.data.success) {
            alert(error.response.data.err);
        }
    }
    return departements
}

export const colonnes = [
    {
        name: 'No',
        selector: (row) => row.no,
        width: '70px',
        sortable: true
    },
    {
        name: 'Image ',
        selector: (row) => row.profileImage,
        width: '100px'
    },
    {
        name: 'Nom ',
        selector: (row) => row.nom,
        sortable: true
    },
    {
        name: 'Prénom ',
        selector: (row) => row.prenom,
        sortable: true
    },
    {
        name: 'Département ',
        selector: (row) => row.departement,
        sortable: true
    },
    {
        name: 'Actions',
        selector: (row) => row.action,
        center: "true"
    }
];

export const EmployeButtons = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <div className="flex justify-between gap-1 ">
            <Link to={`/admin-dashboard/employes/${id}`}>Voir Détails</Link>

            <button onClick={() => navigate(`/admin-dashboard/employes/${ id }`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-green-500 rounded-md hover:bg-green-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${ id }`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <FaMoneyBillWaveAlt />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${ id }`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${ id }`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaMoneyBillWave />
            </button>
        </div>
    )
}