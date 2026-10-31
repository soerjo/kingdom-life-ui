'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthLoading: boolean;
  logout: () => Promise<void>;
  error: Error | null;
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: true,
  isLoading: false,
  isAuthLoading: false,
  logout: async () => {},
  error: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: true,
      isLoading: false,
      isAuthLoading: false,
      logout: async () => {},
      error: null,
    }),
    [],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
