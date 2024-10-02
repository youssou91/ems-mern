import { FaEdit, FaTrash } from "react-icons/fa";

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

export const DepartementButtons = () => {
    return (
        <div className="flex justify-between gap-5 ">
            <button className="flex px-4 py-3 text-medium font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                {/* <Fa */}
                <FaEdit />
                {/* Modifier */}
            </button>
            <button className="flex px-4 py-3 text-medium font-medium text-white bg-red-500 rounded-md hover:bg-red-600">
                {/* <Fa */}
                <FaTrash />
                {/* Supprimer */}
            </button>
        </div>
    )
}