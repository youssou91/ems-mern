// import React from 'react'

const AjoutEmp = () => {
    return (
        <div className='p-2'>
            <h3 className="text-2xl font-bold font-pacific text-center md-6">Ajout d&apos;un employe</h3>
            <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-100">
                <form onSubmit={"handleSubmit"}>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_1">Nom de l&apos;employé</label>
                                <input onChange={"handleChange"} name="nomEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Prénom de l&apos;employé</label>
                                <input onChange={"handleChange"} name="prenomEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Prénom de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_1">Email de l&apos;employé</label>
                                <input onChange={"handleChange"} name="emailEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Email de l&apos;employé" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Matricule de l&apos;employé</label>
                                <input onChange={"handleChange"} name="matriculeEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Matricule de l&apos;employé" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_3">Genre de l&apos;employé</label>
                                <select onChange={"handleChange"} name="genreEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                                    <option value="" selected>Choisissez un genre</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </select>
                                {/* <input onChange={"handleChange"} name="nom_dpmt_1" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du employé 1" /> */}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_3">Statut de l&apos;employé</label>
                                <select onChange={"handleChange"} name="statutEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                                    <option value="" selected>Choisissez un statut</option>
                                    <option value="Actif">Actif</option>
                                    <option value="Inactif">Inactif</option>
                                    <option value="En congé">En congé</option>
                                    <option value="En formation">En formation</option>
                                    
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_1">Département de l&apos;employé</label>
                                
                                <input onChange={"handleChange"} name="dpmtEmp" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du employé 1" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="nom_dpmt_2">Nom de l&apos;employé</label>
                                <input onChange={"handleChange"} name="nom_dpmt_1" className="mt-1 w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nom du employé 1" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                            <div className="py-1">
                                <label className="text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                                <textarea
                                    onChange={"handleChange"}
                                    name="description"
                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Description de l'employé">
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            className="w-full md:w-1/2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 rounded-md"
                            type="submit">
                            Ajouter un employé
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AjoutEmp