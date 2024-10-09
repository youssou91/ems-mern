// import React from 'react'
// import { useState } from "react"
import { Link } from "react-router-dom"

const ListEmp = () => {
    // const [depLoading, setDepLoading] = useState(false)
  return (
    // <>{depLoading? <div>Loading...</div>:
        <div className='p-5'>
          <div className='text-center'>
            <h3 className='text-3xl text-bold font-pacific'>Gestion des employes</h3>
          </div>
          <div className='flex justify-between items-center'>
            <input  className='px-4 py-0.5 border border-gray-300 rounded-md' type="text" placeholder="Rechercher..." />
            <Link className='px-4 py-1 bg-teal-500 rounded text-white' to="/admin-dashboard/ajout-employe">Nouveau employe   </Link>
          </div>
          
        </div>
    //   }</>
  )
}

export default ListEmp