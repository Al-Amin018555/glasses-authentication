import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

        });
    }, []);

    const allValues = {
        createUser,
    };
    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;