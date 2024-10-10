
import User from "./models/User.js";
import bcrypt from 'bcrypt';
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
    await connectToDatabase(); 
    try {
        const hashedPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            prenom: "AdminPrenom",  // Ajoutez un prénom ici
            nom: "AdminNom",        // Ajoutez un nom ici
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin"
        });
        await newUser.save();
        console.log("Utilisateur enregistré avec succès !");
    } catch (err) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur :", err);
    }
};

userRegister();
