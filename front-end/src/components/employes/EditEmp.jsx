// import React from 'react'

const EditEmp = () => {
  return (
    <div className='p-5'>
                    <h3 className="text-2xl font-bold font-pacific text-center md-6">Modification d&apos;un département</h3>
                    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-100">
                        <form onSubmit={"handleSubmit"}>
                            <div className="py-4">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt">Nom du département</label>
                                <input value={"departement.nom_dpmt || ''"} onChange={"handleChange"} name="nom_dpmt" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du département" />
                            </div>
                            <div className="py-4">
                                <label className="text-sm font-medium text-gray-700" htmlFor="description">Description </label>
                                <textarea value={"departement.description || ''"} onChange={"handleChange"} name="description" className="mt-1 w-full p-2 border border-gray-300 rounded-md" placeholder="Description du département"></textarea>
                            </div>
                            <div className="py-4">
                                <button className="w-full mt-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 rounded-md" type="submit">
                                    Ajouter un département
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
  )
}

export default EditEmp