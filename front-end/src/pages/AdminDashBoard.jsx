import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

const AdminDashBoard = () => {
  const {user, loading} = useAuth()
  const navigate = useNavigate()
  if (loading) return <div>Loading...</div>

  if (!user) {
    navigate('/login')  
  }
  return (
    <div>AdminDashBoard {user && user.name}</div>
  )
}

export default AdminDashBoard