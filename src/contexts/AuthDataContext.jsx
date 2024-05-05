import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthDataContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //Create new user by email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login user by email
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Logout user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Update user profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: url || user?.photoURL,
    });
  };

  //Update Email
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  //Email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //Update Password
  const updateUserPassword = (newPassword) => {
    return updatePassword(user, newPassword);
  };

  //Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Delete User
  const deleteUserProfile = () => {
    return deleteUser(user);
  };

  //Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const AuthData = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    updateUserEmail,
    emailVerification,
    updateUserPassword,
    resetPassword,
    deleteUserProfile,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

AuthDataContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthDataContext;
