import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaBuilding, FaMoneyBillWave, FaCogs, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            {/* Bouton pour afficher la sidebar en mode mobile */}
            <button 
                className="sm:hidden p-4 text-white bg-teal-600 fixed top-4 left-4 z-50 rounded-md"
                onClick={toggleSidebar} >
                <FaBars />
            </button>
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                             sm:translate-x-0 transition-transform transform bg-gray-500 text-white h-screen fixed left-0 top-0 bottom-0 space-y-3 w-64`}>
                <div className="bg-teal-600 h-20 flex items-center justify-center">
                    <h3 className="text-2xl text-center font-pacific">S. G. E.</h3>
                </div>
                <div className="px-4">
                    <NavLink to={"/admin-dashboard"} className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`} end>
                        <FaTachometerAlt />
                        <span>Tableau de Bord</span>
                    </NavLink>
                    <NavLink to={"/admin-dashboard/employes"} className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`}>
                        <FaUsers />
                        <span>Employes</span>
                    </NavLink>
                    <NavLink to={"/admin-dashboard/departements"} className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`}>
                        <FaBuilding />
                        <span>Départements</span>
                    </NavLink>
                    <NavLink to={"/admin-dashboard/salaires"} className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`}>
                        <FaMoneyBillWave />
                        <span>Salaire</span>
                    </NavLink>
                    <NavLink to={"/admin-dashboard/parametres"} className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-5 block py-2.5 px-4 rounded`}>
                        <FaCogs />
                        <span>Parametres</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
