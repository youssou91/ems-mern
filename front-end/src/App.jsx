import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Notfound from "./pages/Notfound"
import AdminDashBoard from "./pages/AdminDashBoard"
import EmployeeDashboard from "./pages/employeeDashboard"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/admin-dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashBoard />} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
