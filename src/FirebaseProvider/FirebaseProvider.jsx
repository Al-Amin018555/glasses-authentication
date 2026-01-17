import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();    
    const twitterProvider = new TwitterAuthProvider();


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
    // twitter sing in
    const twitterSignIn = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    // log out
    const logOut = () => {
        setUser(null);
        signOut(auth);
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
        twitterSignIn,
        logOut,
    };
    return (
        <AuthContext value={allValues}>
            {children}
        </AuthContext>
    );
};

export default FirebaseProvider;