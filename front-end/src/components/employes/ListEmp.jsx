import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { EmployeButtons, colonnes} from "../../utils/EmployeHelper"
import DataTable from "react-data-table-component"

const ListEmp = () => {
  // eslint-disable-next-line no-unused-vars
  const [employes, setEmployes] = useState([])
  const [depLoading, setDepLoading] = useState(false)
  const [filterEmployes, setFilterEmployes] = useState([])

  useEffect(() => {
    const fetchEmploye = async () => {
      setDepLoading(true)  
      try {
        const response = await axios.get('http://localhost:5000/api/employes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response) {
          let no = 1;
          const data = response.data.employes.map((employe) => (
            {
              _id: employe._id,
              no: no++,
              nom: employe.userId?.nom || "Nom manquant", // Si "nom" n'existe pas, affiche un placeholder
              prenom: employe.userId?.prenom || "Prénom manquant",
              departement: employe.departement?.nom_dpmt || "Département manquant",
              profileImage:<img src={`http://localhost:5000/${ employe.userId.profileImage}`}  style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> || "https://via.placeholder.com/50", // Placeholder si l'image est manquante
              action: (<EmployeButtons Id = {employe._id} />)
            }
          ));
          setEmployes(data)
          setFilterEmployes(data)
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.err);
        }
      } finally {
        setDepLoading(false)  
      }
    }
    fetchEmploye()
  }, []);
  
  return (
    <>{depLoading ? <div>Loading...</div> :  
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
            columns={colonnes} data={filterEmployes} pagination
          />
        </div>
      </div>
    }</>
  )
}

export default ListEmp
