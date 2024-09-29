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
        <Route path="/admin-dashboard/departements" element={<DepartementList/>}></Route>
        <Route path="/admin-dashboard/ajout-departement" element={<AjoutDepartement/>}></Route>
      </Route>
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
