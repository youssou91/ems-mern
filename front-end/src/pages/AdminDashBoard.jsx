import { Outlet } from "react-router-dom"
import AdminSideBar from "../components/dashboard/adminSideBar"
import Navbar from "../components/dashboard/Navbar"

const AdminDashBoard = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>

    </div>
  )
}

export default AdminDashBoard