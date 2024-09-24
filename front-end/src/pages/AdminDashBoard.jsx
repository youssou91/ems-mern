// import { useNavigate } from "react-router-dom"
import AdminSideBar from "../components/dashboard/adminSideBar"
// import { useAuth } from "../context/authContext"

const AdminDashBoard = () => {
  // const {user} = useAuth()
  // const navigate = useNavigate()
  // if (loading) return <div>Loading...</div>

  // if (!user) {
  //   navigate('/login')  
  // }
  return (
    <div>
      <AdminSideBar />
    </div>
  )
}

export default AdminDashBoard