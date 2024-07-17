import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../../firebase-config";

// Define the context type
// interface AuthContextType {
//   user: User | null;
//   signInWithGoogle: () => Promise<void>;
//   signOutUser: () => Promise<void>;
// }
export enum AuthStatus {
  LOADING,
  NOT_LOGGED_IN,
  LOGGED_IN,
}

// Create a context with an initial null state
const AuthContext = createContext<any>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<AuthStatus>(AuthStatus.LOADING);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
        setUserState(AuthStatus.LOGGED_IN);
      } else {
        setUserState(AuthStatus.NOT_LOGGED_IN);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userState, user, signInWithGoogle, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
