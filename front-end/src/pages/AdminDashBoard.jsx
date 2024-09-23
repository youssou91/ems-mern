import { useAuth } from "../context/authContext"

const AdminDashBoard = () => {
  const {user} = useAuth()
  return (
    <div>AdminDashBoard {user && user.name}</div>
  )
}

export default AdminDashBoard