export const colums = [
    {
        name: 'S No',
        selector: (row)=>row.sno
    },
    {
        name: 'Nom Departement',
        selector: (row)=>row.nom_dpmt
    },
    {
        name: 'Actions',
        selector: (row)=>row.action
    }
];

export const DepartementButtons = ()=>{
    return (
        <div className="flex justify-end">
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Modifier</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600">Supprimer</button>
        </div>
    )
}