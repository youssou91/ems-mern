/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const colums = [
    {
        name: 'S No',
        selector: (row) => row.sno
    },
    {
        name: 'Nom Departement',
        selector: (row) => row.nom_dpmt
    },
    {
        name: 'Actions',
        selector: (row) => row.action
    }
];

export const DepartementButtons = ({_id}) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between gap-5 ">
            <button onClick={()=>navigate(`/admin-dashboard/departement/${_id}`)}
                className="flex px-4 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                <FaEdit />
            </button>
            <button 
                className="flex px-4 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                <FaTrash />
            </button>
        </div>
    )
}