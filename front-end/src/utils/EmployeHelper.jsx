import axios from "axios";
export const fetchDepartement = async () => {
    let departements
    try {
        const response = await axios.get('http://localhost:5000/api/departement', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        if (response.data.success) {
            departements = response.data.departements
        }
    } catch (error) {
        if (error.response.status && !error.response.data.success) {
            alert(error.response.data.err);
        }
    } 
    return departements
}