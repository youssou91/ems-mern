import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
    
        mongoose.connect(process.env.mongo);
        console.log("Connecté à MongoDB avec succès !");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error.message);
        process.exit(1);
    }
};

export default connectToDatabase;
