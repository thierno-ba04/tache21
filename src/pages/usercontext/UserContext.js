import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';




export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserContextProvider(props) {

    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoadingData(false)
        })
        

        return unsubscribe
    }, [])

    const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };


    return (
        <UserContext.Provider value={{currentUser, signIn}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}