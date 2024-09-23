
const verifyUser = async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split('')[1];
        if (!token) {
            return res.status(404).json({succes: false, error:"Token Not Provided"})
        }
    } catch (error) {
        
    }
}