import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { colums, EmployeButtons, } from '../../utils/EmployeHelper'
import axios from "axios"
import DataTable from "react-data-table-component"


const ListEmp = () => {
  const [employe, setEmploye] = useState([])
  const [filterEmploye, setFilterEmploye] = useState([])
  const [depLoading, setDepLoading] = useState(false)
  useEffect(() => {
    const fetchEmploye = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/employes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.data.success) {
          let no = 1;
          const data = await response.data.employes.map((employe) => (
            {
              _id: employe._id,
              sno: no++,
              nom_dpmt: employe.nom,
              action: (<EmployeButtons _id={employe._id}  />)
            }
          ))
          setEmploye(data)
          setFilterEmploye(data)
        }
      } catch (error) {
        if (error.response.status && !error.response.data.success) {
          alert(error.response.data.err);
        }
      } finally {
        setDepLoading(false)
      }
    }
    fetchEmploye()
  }, []);
  return (
    <>{depLoading? <div>Loading...</div>:
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-3xl text-bold font-pacific'>Gestion des employes</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input className='px-4 py-0.5 border border-gray-300 rounded-md' type="text" placeholder="Rechercher..." />
        <Link className='px-4 py-1 bg-teal-500 rounded text-white' to="/admin-dashboard/ajout-employe">Nouveau employe   </Link>
      </div>
      <div>
          <DataTable
            columns={colums} data={filterEmploye} pagination
          />
        </div>
    </div>
      }</>
  )
}

export default ListEmp