import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google sing in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // github sign in
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
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
        user,
        signIn,
        googleSignIn,
        githubSignIn,
    };
    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;