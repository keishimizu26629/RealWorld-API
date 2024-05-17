'use client';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { useHomeViewModel } from './homeViewModel';

export default function Home() {
  const { user, initialize } = useHomeViewModel();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!user) {
    return null;
  }

  return (
    <AuthProvider>
      <>
      </>
    </AuthProvider>
  );
}
