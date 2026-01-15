import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {

    //create user
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
 
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