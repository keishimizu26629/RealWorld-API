'use client';
import { useEffect } from 'react';
import { ServiceProvider } from '../contexts/ServiceContext';
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
    <ServiceProvider>
      <>
      </>
    </ServiceProvider>
  );
}
