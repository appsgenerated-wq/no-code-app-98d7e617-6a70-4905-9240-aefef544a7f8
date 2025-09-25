import React, { createContext, useState, useEffect, useContext } from 'react';
import Manifest from '@mnfst/sdk';

export const AuthContext = createContext();

const manifest = new Manifest();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCurrentUser = async () => {
      try {
        const currentUser = await manifest.from('users').me();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkCurrentUser();
  }, []);

  const login = async (email, password) => {
    await manifest.login('users', email, password);
    const currentUser = await manifest.from('users').me();
    setUser(currentUser);
  };

  const register = async (userData) => {
    await manifest.from('users').create(userData);
    await manifest.login('users', userData.email, userData.password);
    const currentUser = await manifest.from('users').me();
    setUser(currentUser);
  };

  const logout = async () => {
    await manifest.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
