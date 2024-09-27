// import React from 'react'

import { NavLink } from "react-router-dom"
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers } from 'react-icons/fa'

const AdminSideBar = () => {
    return (
        <div className="bg-gray-500 text-white h-screen fixed left-0 top-0 bottom-0 space-y-3 w-64">
            <div className="bg-teal-600 h-20 flex items-center justify-center">
                <h3 className="text-2xl text-center font-pacific">S. G. E.</h3>
            </div>
            <div className="px-4">
                <NavLink to={"/admin-dashboard"} className={({isActive}) => `${isActive? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`} end>
                    <FaTachometerAlt />
                    <span>Tableau de Bord</span>
                </NavLink>
                <NavLink to={"/admin-dashboard/employees"} className="flex items-center space-x-5 block py-4 px-4 rounded">
                    <FaUsers />
                    <span>Employes</span>
                </NavLink>
                <NavLink to={"/admin-dashboard/departements"} className={({isActive}) => `${isActive? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`}>
                    <FaBuilding />
                    <span>Departements</span>
                </NavLink>
                <NavLink to={"/admin-dashboard/add"} className="flex items-center space-x-5 block py-4 px-4 rounded">
                    <FaCalendarAlt />
                    <span>to update</span>
                </NavLink>
                <NavLink to={"/admin-dashboard/departments/add"} className="flex items-center space-x-5 block py-4 px-4 rounded">
                    <FaMoneyBillWave />
                    <span>Salaire</span>
                </NavLink>
                <NavLink to={"/admin-dashboard/logout"} className="flex items-center space-x-5 block py-4 px-4 rounded">
                    <FaCogs />
                    <span>Parametres</span>
                </NavLink>
            </div>

        </div>
    )
}

export default AdminSideBar