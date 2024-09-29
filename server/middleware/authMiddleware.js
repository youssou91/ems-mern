import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Assurez-vous que vous importez le modèle utilisateur

const verifyUser = async (req, res, next) => {
    try {
        // Vérifier si l'en-tête Authorization est présent
        if (!req.headers.authorization) {
            return res.status(401).json({ success: false, error: "Token non fourni" });
        }

        // Récupérer le token à partir de l'en-tête Authorization
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, error: "Token non fourni" });
        }

        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (!decoded) {
            return res.status(401).json({ success: false, error: "Token non valide" });
        }

        // Rechercher l'utilisateur correspondant à l'ID décodé dans le token
        const user = await User.findById({ _id: decoded._id }).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, error: "Utilisateur non trouvé" });
        }

        // Ajouter l'utilisateur à la requête pour qu'il soit accessible dans les routes suivantes
        req.user = user;
        next();
    } catch (error) {
        console.error("Erreur serveur lors de la vérification du token :", error.message);
        return res.status(500).json({ success: false, error: "Erreur serveur" });
    }
};

export default verifyUser;
