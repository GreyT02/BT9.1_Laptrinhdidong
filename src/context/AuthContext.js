import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isRestoring: false,
  signIn: () => {},
  signOut: () => {},
});
