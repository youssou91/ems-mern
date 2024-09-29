// import React from 'react'
import { Link } from 'react-router-dom'

const DepartementList = () => {
  return (
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-3xl text-bold font-pacific'>Gestion des départements</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input className='px-4 py-0.5 border border-gray-300 rounded-md' type="text" placeholder="Recherche par nom dpmt" />
        <Link className='px-4 py-1 bg-teal-500 rounded text-white' to="/admin-dashboard/ajout-departement">Nouveau département   </Link>
      </div>
    </div>
  )
}

export default DepartementList