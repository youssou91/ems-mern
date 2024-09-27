// import React from 'react'

import { FaBuilding, FaCheckCircle, FaHourglassHalf, FaMoneyBillAlt, FaTimesCircle, FaUsers } from "react-icons/fa"
import SummaryCard from "./SummaryCard"

const AdminSummary = () => {
  return (
    <div className="p-6">
      <h3 className="text-2xl text-center font-pacific ">Tableau de Bord</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<FaUsers />} text="Total des Employes" number={18} color="bg-green-500" />
        <SummaryCard icon={<FaBuilding />} text="Total des Departements" number={8} color="bg-yellow-500" />
        <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Mensuels" number={15750} color="bg-teal-500" />
      </div>
      <di className="mt-12">
        <h4 className="text-center text-2xl font-pacific">Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <SummaryCard icon={<FaUsers />} text="Employés par Departement" number={10} color="bg-blue-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={4000} color="bg-pink-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Populaires" number={3} color="bg-red-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={3000} color="bg-purple-500" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Riches" number={2} color="bg-orange-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={3500} color="bg-indigo-500" />
          <SummaryCard icon={<FaCheckCircle />} text="Departements les plus Grosses" number={2} color="bg-gray-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={2500} color="bg-teal-600" />
          <SummaryCard icon={<FaHourglassHalf />} text="Employés les plus Pauvres" number={1} color="bg-green-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={2000} color="bg-blue-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Petits" number={1} color="bg-yellow-500" />
          <SummaryCard icon={<FaTimesCircle />} text="Salaires Moyens par Departement" number={1500} color="bg-pink-500" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Actifs" number={1} color="bg-orange-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={2500} color="bg-indigo-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Inactifs" number={1} color="bg-gray-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={1000} color="bg-teal-600" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-green-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-blue-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-yellow-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-pink-500" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-orange-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-indigo-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-gray-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-teal-600" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-green-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-blue-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-yellow-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-pink-500" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-orange-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-indigo-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-gray-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-teal-600" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-green-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-blue-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-yellow-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-pink-500" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-orange-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-indigo-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-gray-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-teal-600" />
          <SummaryCard icon={<FaUsers />} text="Employés les plus Rares" number={1} color="bg-green-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Employé" number={500} color="bg-blue-500" />
          <SummaryCard icon={<FaBuilding />} text="Departements les plus Rares" number={1} color="bg-yellow-500" />
          <SummaryCard icon={<FaMoneyBillAlt />} text="Salaires Moyens par Departement" number={500} color="bg-pink-500" />


        </div>
        
      </di>
    </div>
  )
}

export default AdminSummary