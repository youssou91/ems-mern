import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
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
import EditEmp from "./components/employes/EditEmp"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={
        <PrivateRoutes >
          <RoleBaseRoute requiredRole={["admin"]}>
            <AdminDashBoard />
          </RoleBaseRoute>
        </PrivateRoutes>
      } >
        <Route index element={<AdminSummary/>}></Route>
        {/* Departements */}
        <Route path="/admin-dashboard/departements" element={<DepartementList/>}></Route>
        <Route path="/admin-dashboard/ajout-departement" element={<AjoutDepartement/>}></Route>
        <Route path="/admin-dashboard/departement/:id" element={<EditDepartement/>}></Route>
        {/* employes */}
        <Route path="/admin-dashboard/employes" element={<ListEmp/>}></Route>
        <Route path="/admin-dashboard/ajout-employe" element={<AjoutEmp/>}></Route>
        <Route path="/admin-dashboard/employe/:id" element={<EditEmp/>}></Route>
      </Route>
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
