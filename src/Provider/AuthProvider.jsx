import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
// creating context
export const AuthContext = createContext();

// for signig up.....
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // testing
  console.log(user);
  // Create user function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // calling the function forobserver.
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
