import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootRouterAsync from './src/navigation/RootRouterAsync';
import { AuthContext } from './src/context/AuthContext';

const LOGIN_KEY = 'LOGIN_STATUS';

export default function AppAsyncStorage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRestoring, setIsRestoring] = useState(true);

  useEffect(() => {
    const restoreLogin = async () => {
      try {
        const savedValue = await AsyncStorage.getItem(LOGIN_KEY);
        if (savedValue !== null) {
          setIsLoggedIn(JSON.parse(savedValue));
        }
      } catch (error) {
        console.log('Restore login error:', error);
      } finally {
        setIsRestoring(false);
      }
    };

    restoreLogin();
  }, []);

  useEffect(() => {
    const cacheLogin = async () => {
      try {
        await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(isLoggedIn));
      } catch (error) {
        console.log('Save login error:', error);
      }
    };

    if (!isRestoring) {
      cacheLogin();
    }
  }, [isLoggedIn, isRestoring]);

  const authValue = useMemo(
    () => ({
      isLoggedIn,
      isRestoring,
      signIn: () => setIsLoggedIn(true),
      signOut: async () => {
        setIsLoggedIn(false);
        await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(false));
      },
    }),
    [isLoggedIn, isRestoring]
  );

  return (
    <AuthContext.Provider value={authValue}>
      <RootRouterAsync />
    </AuthContext.Provider>
  );
}
