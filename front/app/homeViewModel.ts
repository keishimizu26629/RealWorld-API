import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserData } from '../application/services/userService';

export const useHomeViewModel = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const initialize = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userData = await fetchUserData(token);
        if (userData) {
          setUser(userData);
          router.push('/article');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error', error);
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  };

  return {
    user,
    initialize,
  };
};
