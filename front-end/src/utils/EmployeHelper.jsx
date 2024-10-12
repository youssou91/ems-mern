import axios from "axios";
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
/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const colums = [
    {
        name: 'No',
        selector: (row) => row.no
    },
    {
        name: 'Nom ',
        selector: (row) => row.nom,
        sortable: true
    },
    {
        name: 'Prenom ',
        selector: (row) => row.prenom,
        sortable: true
    },
    {
        name: 'Poste ',
        selector: (row) => row.designation,
        sortable: true
    },
    {
        name: 'Actions',
        selector: (row) => row.action
    }
];

export const EmployeButtons = ({ _id}) => {
    // const [departement, setDepartement] = useState([]);
    const navigate = useNavigate()
    
    return (
        <div className="flex justify-between gap-1 ">
            <button onClick={() => navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-3 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
        </div>
    )
}