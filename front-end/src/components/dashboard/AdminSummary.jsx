// import React from 'react'

import { FaBuilding, FaUsers } from "react-icons/fa"
import SummaryCard from "./SummaryCard"

const AdminSummary = () => {
  return (
    <div className="p-6">
        <h3 className="text-2xl font-pacific ">Tableau de Bord</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <SummaryCard icon={<FaUsers/>} text="Total des Employes" number={18} color="bg-green-500"/>
            <SummaryCard icon={<FaBuilding/>} text="Total des Departements" number={8} color="bg-gray-500"/>
            
        </div>
    </div>
  )
}

export default AdminSummary