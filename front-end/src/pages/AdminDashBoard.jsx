// import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import AdminSideBar from "../components/dashboard/adminSideBar"
import AdminSummary from "../components/dashboard/AdminSummary"
import Navbar from "../components/dashboard/Navbar"
// import { useAuth } from "../context/authContext"

const AdminDashBoard = () => {
  // const {user} = useAuth()
  // const navigate = useNavigate()
  // if (loading) return <div>Loading...</div>

  // if (!user) {
  //   navigate('/login')  
  // }
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