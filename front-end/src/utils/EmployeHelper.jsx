// import axios from "axios";
// export const fetchDepartement = async () => {
//     let departements
//     try {
//         const response = await axios.get('http://localhost:5000/api/departement', {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//         if (response.data.success) {
//             departements = response.data.departements
//         }
//     } catch (error) {
//         if (error.response.status && !error.response.data.success) {
//             alert(error.response.data.err);
//         }
//     } 
//     return departements
// }

/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const colums = [
    {
        name: 'No',
        selector: (row) => row.sno
    },
    {
        name: 'Nom',
        selector: (row) => row.nom_dpmt,
        sortable: true
    },
    {
        name: 'Prenom',
        selector: (row) => row.nom_dpmt,
        sortable: true
    },
    {
        name: 'Adresse',
        selector: (row) => row.nom_dpmt,
        sortable: true
    },
    {
        name: 'Departement',
        selector: (row) => row.nom_dpmt,
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
    // const handleDelete = async (_id) => {
    //     if (window.confirm('Etes-vous sur de vouloir supprimer ce employe ?')) {
    //         try {
    //             const response = await axios.delete(`http://localhost:5000/api/employe/${_id}`, {
    //                 headers: {
    //                     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //                 }
    //             });
    //             if (response.data.success) {
    //                 // onDeleteDepartement(_id)
    //                 navigate('/admin-dashboard/employes')
                    
    //             }
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }
    return (
        <div className="flex justify-between gap-5 ">
            <button onClick={() => navigate(`/admin-dashboard/employe/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button onClick={() => navigate(`/admin-dashboard/employe/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
        </div>
    )
}