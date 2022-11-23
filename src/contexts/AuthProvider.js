import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const providerLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password )
    }

    const profileUpdate = (name, photourl) => {
        return updateProfile(auth.currentUser,  {
            displayName: name,
            photoURL: photourl
        })
    }

    const verifyEmailAddress = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const userInfo = { user, providerLogin, setUser, providerLogOut, createUser, loginUser, profileUpdate, loading, verifyEmailAddress }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false)
        })

        return () =>{
            unsubscribe()
        }

    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;