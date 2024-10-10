import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // Timeout après 10 secondes
        });
        console.log("Connecté à MongoDB avec succès !");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error.message);
        process.exit(1);
    }
};

export default connectToDatabase;
