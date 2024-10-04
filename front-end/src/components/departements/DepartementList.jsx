/* eslint-disable no-unused-vars */
// import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from  'react-data-table-component'
import { colums, DepartementButtons } from '../../utils/DepartementHelper'
import { useEffect, useState } from 'react'
import axios from 'axios'


const DepartementList = () => {
  const [departements, setDepartements] = useState([])
  const [filterdepartements, setFilterDepartements] = useState([])
  const [depLoading, setDepLoading] = useState(false)

  useEffect(() =>{
    const fetchDepartement = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/departement', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.data.success){
          let sno = 1;
          const data = await response.data.departements.map((departement) =>(
            {
              _id: departement._id,
              sno: sno++,
              nom_dpmt: departement.nom_dpmt,
              action: (<DepartementButtons _id={departement._id} onDeleteDepartement ={onDeleteDepartement}/>)
            }
          ))
          setDepartements(data)
          setFilterDepartements(data)
        }
      } catch (error) {
        if (error.response.status && !error.response.data.success) {
          alert(error.response.data.err);
         }
      }finally{
        setDepLoading(false)
      }
    }
    fetchDepartement()
  },[]);

  const onDeleteDepartement = async (id) => {
    const data = departements.filter(departement => departement._id !== id);
    setDepartements(data);

  }

  const filterDep = (e) => {
    const record = departements.filter((dep) =>
    dep.nom_dpmt.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilterDepartements(record)
    // const filter = e.target.value.toLowerCase();
    // setDepartements(departements.filter(dep => dep.nom_dpmt.toLowerCase().includes(filter)))
  }
  return (
    <>{depLoading? <div>Loading...</div>:
      <div className='p-5'>
        <div className='text-center'>
          <h3 className='text-3xl text-bold font-pacific'>Gestion des départements</h3>
        </div>
        <div className='flex justify-between items-center'>
          <input onChange={filterDep} className='px-4 py-0.5 border border-gray-300 rounded-md' type="text" placeholder="Recherche par nom dpmt" />
          <Link className='px-4 py-1 bg-teal-500 rounded text-white' to="/admin-dashboard/ajout-departement">Nouveau département   </Link>
        </div>
        <div>
          <DataTable
            columns={colums} data={filterdepartements} pagination
          />
        </div>
      </div>
    }</>
  )
}

export default DepartementList