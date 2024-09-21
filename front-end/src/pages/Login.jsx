import { useState } from "react"
import {axios} from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handelSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password})
            console.log(response.data)
        } catch (err) {
            console.log(err)
        } 
    }
    return (
        <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600
            from-50% to-gray-100 to-50% space-y-6">
            <h2 className="font-pacific text-3xl text-white">Systeme de Gestions des Employes</h2>
            <div className="border border-gray-300 shadow-lg p-6 w-100 bg-white rounded">
                <h2 className="text-2xl font-bold mb-4">Connexion</h2>
                <form action="" onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="Email">Email</label>
                        <input className="w-full px-3 py-2 border" 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" id="username" name="username" placeholder="Entrer l'email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="password">Mot de passe:</label>
                        <input className="w-full px-3 py-2 border" 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" id="password" name="password" placeholder="Entrer le mot de pass" required />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                        <label className="inline-flex items-center" htmlFor="">
                            <input type="checkbox" id="rememberMe" className="form-checkbox" />
                            <span className="ml-2 text-gray-700">Se souvenir de moi</span>
                            <a href="#" className="text-teal-600 hover:text-blue-600 ml-2">Mot de passe oublié?</a>
                        </label>
                    </div>
                    <div className="mb-4">
                        <button className="w-full bg-teal-600 text-white py-2 rounded" type="submit">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login