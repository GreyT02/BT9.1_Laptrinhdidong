import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import RootRouterContext from './src/navigation/RootRouterContext';
import { AuthContext } from './src/context/AuthContext';

export default function AppContextOnly() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authValue = useMemo(
    () => ({
      isLoggedIn,
      signIn: () => setIsLoggedIn(true),
      signOut: () => setIsLoggedIn(false),
    }),
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <RootRouterContext />
    </AuthContext.Provider>
  );
}
