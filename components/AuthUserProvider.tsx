import React, { createContext, ReactNode, useContext } from "react";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

const AuthUserContext = createContext<InAuthUserContext>({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => ({ user: null, credential: null }),
  signOut: () => {},
});

export const useAuth = () => useContext(AuthUserContext);

const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export default AuthUserProvider;
