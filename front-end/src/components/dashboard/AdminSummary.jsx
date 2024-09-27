// import React from 'react'

import { FaBuilding, FaCheckCircle, FaMoneyBillAlt, FaUsers } from "react-icons/fa"
import SummaryCard from "./SummaryCard"

const AdminSummary = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-pacific">Tableau de Bord</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-6 mb-6">
        <SummaryCard icon={<FaUsers />} text="Total des Employes" number={18} color="bg-green-500" />
        <SummaryCard icon={<FaBuilding />} text="Total des Departements" number={8} color="bg-yellow-500" />
        <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Mensuels" number={15750} color="bg-teal-500" />
      </div>
      <di className="mt-12">
        <h1 className="text-2xl text-center font-pacific">Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <SummaryCard icon={<FaUsers />} text="Employés par Departement" number={10} color="bg-blue-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={4000} color="bg-pink-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Populaires" number={3} color="bg-red-500" />
          <SummaryCard icon={<FaCheckCircle />} text="Salaires Moyens par Departement" number={3000} color="bg-purple-500" />
        </div>
      </di>
    </div>
  )
}

export default AdminSummary