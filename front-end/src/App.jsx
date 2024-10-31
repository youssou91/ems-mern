import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Notfound from "./pages/Notfound"
import AdminDashBoard from "./pages/AdminDashBoard"
import EmployeeDashboard from "./pages/employeeDashboard"
import PrivateRoutes from "./utils/PrivateRoutes"
import RoleBaseRoute from "./utils/RoleBaseRoute"
import AdminSummary from "./components/dashboard/AdminSummary"
import DepartementList from "./components/departements/DepartementList"
import AjoutDepartement from "./components/departements/ajoutDepartement"
import EditDepartement from "./components/departements/EditDepartement"
import ListEmp from "./components/employes/ListEmp"
import AjoutEmp from "./components/employes/AjoutEmp"
import VoirEmp from "./components/employes/VoirEmp"
import ListSalaire from "./components/salaire/listSalaire"
import Parametres from "./components/parametres/Parametres"
import { useState } from "react"
function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        
        {/* Sidebar avec affichage conditionnel pour les petits écrans */}
        {/* <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}
        
        <div className="flex flex-col flex-1 w-full">
          
          {/* Topbar avec bouton de bascule de la sidebar */}
          {/* <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} /> */}

          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/admin-dashboard" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-dashboard" element={
                <PrivateRoutes >
                  <RoleBaseRoute requiredRole={["admin"]}>
                    <AdminDashBoard />
                  </RoleBaseRoute>
                </PrivateRoutes>
              }>
                <Route index element={<AdminSummary />}></Route>
                {/* Departements */}
                <Route path="departements" element={<DepartementList />}></Route>
                <Route path="ajout-departement" element={<AjoutDepartement />}></Route>
                <Route path="departement/:id" element={<EditDepartement />}></Route>
                {/* employes */}
                <Route path="employes" element={<ListEmp />}></Route>
                <Route path="ajout-employe" element={<AjoutEmp />}></Route>
                <Route path="employe/:id" element={<VoirEmp />}></Route>
                {/* Salaires */}
                <Route path="salaires" element={<ListSalaire/>}></Route>
                {/* Parametres */}
                <Route path="parametres" element={<Parametres />}></Route>
              </Route>
              <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
              <Route path="*" element={<Notfound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
