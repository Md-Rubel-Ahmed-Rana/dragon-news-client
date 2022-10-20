import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const providerLogOut = () => {
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password )
    }

    const profileUpdate = (name, photourl) => {
        return updateProfile(auth.currentUser,  {
            displayName: name,
            photoURL: photourl
        })
    }
    const userInfo = { user, providerLogin, setUser, providerLogOut, createUser, loginUser, profileUpdate }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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