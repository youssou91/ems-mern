import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { EmployeButtons, colums } from "../../utils/EmployeHelper"
import DataTable from "react-data-table-component"

const ListEmp = () => {
    const [depLoading, setDepLoading] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [employes, setEmployes] = useState([])
  const [filterEmployes, setFilterEmployes] = useState([])

  useEffect(() =>{
    const fetchEmploye = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/employe', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.data.success){
          let   no = 1;
          const data = await response.data.employes.map((employe) =>(
            {
              _id: employe._id,
              no: no++,
              nom: employe.sexe,
              prenom: employe.prenom,
              designation: employe.designation,
              action: (<EmployeButtons _id={employe._id} />)
            }
          ))
          setEmployes(data)
          setFilterEmployes(data)
        }
      } catch (error) {
        if (error.response.status && !error.response.data.success) {
          alert(error.response.data.err);
         }
      }finally{
        setDepLoading(false)
      }
    }
    fetchEmploye()
  },[]);
  return (
    <>{depLoading? <div>Loading...</div>:
        <div className='p-5'>
          <div className='text-center'>
            <h3 className='text-3xl text-bold font-pacific'>Gestion des employes</h3>
          </div>
          <div className='flex justify-between items-center'>
            <input  className='px-4 py-0.5 border border-gray-300 rounded-md' type="text" placeholder="Rechercher..." />
            <Link className='px-4 py-1 bg-teal-500 rounded text-white' to="/admin-dashboard/ajout-employe">Nouveau employe   </Link>
          </div>
          <div>
          <DataTable
            columns={colums} data={filterEmployes} pagination
          />
        </div>
        </div>
      }</>
  )
}

export default ListEmp